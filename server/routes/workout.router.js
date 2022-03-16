const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const dummyExerciseData = require('../modules/dummyExerciseData');
const phaseData = require('../modules/phaseData');
const {
  default: axios
} = require('axios');

// #region ==== GET ROUTES ====
// get workout request first starts with grabbing all eligible
// templates from the database and selecting one template that corresponds
// to the day the user is on in their week (ex: working out twice a week, on second day)
router.get('/', async (req, res) => {
  const id = req.user.id
  const dayOfWeek = Number(req.body.dayOfWeek);
  // console.log('dayOfWeek', dayOfWeek);

  if (req.isAuthenticated()) {
    // pulls user's days_per_week integer in database to determine which templates they are eligible for
    const daysQuery = await pool.query(`SELECT "user_preferences"."days_per_week" FROM "user_preferences" WHERE id=$1;`, [id])
    const daysPerWeek = daysQuery.rows[0].days_per_week;
    // console.log('daysPerWeek', daysPerWeek);


    // selects all eligible templates based off of user's daysPerWeek value
    const templatesQuery = await pool.query(`SELECT * FROM "full_body_workouts" WHERE "days_per_week" = $1 ORDER BY "id";`, [daysPerWeek])
    const workoutTemplates = templatesQuery.rows;
    // console.log('workoutTemplates', workoutTemplates);


    // selects array of exerciseHistory for that given week
    const historyQuery = await pool.query(
      `SELECT array_agg("exercise_history"."exercise_id") AS exercise_id

      FROM "exercise_history" 
      JOIN "user" ON "exercise_history"."user_id" = "user"."id"

      WHERE "exercise_history"."user_id" = $1
      GROUP BY "exercise_history"."user_id";`, [id]
    )
    
    let exerciseHistory;    
    if (historyQuery.rows[0]) {
      exerciseHistory = historyQuery.rows[0].exercise_id;
    } else {
      exerciseHistory = ['none'];
    }
    // console.log('exerciseHistory', exerciseHistory);

    // selects array of equipment available to the user
    const equipmentQuery = await pool.query(
      `SELECT array_agg("equipment"."name") AS equipment_available
      FROM "users_equipment" 
      JOIN "user" ON "users_equipment"."user_id" = "user"."id"
      JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
      
      WHERE "users_equipment"."user_id" = $1
      GROUP BY "users_equipment"."user_id";`, [id]
    )
    const equipmentAvailable = equipmentQuery.rows[0].equipment_available;

    console.log('equipmentAvailable', equipmentAvailable[0].equipment_available);

    // grabs exercise data from ExerciseDB database
    // const exerciseAPIQuery = await axios.get(`https://exercisedb.p.rapidapi.com/exercises`, {
    //   headers: {
    //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    //     'x-rapidapi-key': `${process.env.EXERCISE_DB_API_KEY}`
    //   }
    // })
    // const allExercises = exerciseAPIQuery.data;
    const allExercises = dummyExerciseData;

    // initiates all buildDailyWorkout function and sends all data grabbed before as 
    // necessary values for determine dailyWorkout
    const dailyWorkout = await buildDailyWorkout(dayOfWeek, workoutTemplates, exerciseHistory, equipmentAvailable, allExercises);

    res.send(dailyWorkout);

  } else {
    res.sendStatus(403);
  }
})

router.get('/equipment/:id', (req, res) => {
  let id = req.params.id;

  // selects all equipment available associated with user id
  let queryText = `SELECT array_agg("equipment"."name") AS equipment_available

  FROM "users_equipment" 
  JOIN "user" ON "users_equipment"."user_id" = "user"."id"
  JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
  
  WHERE "users_equipment"."user_id" = $1
  GROUP BY "users_equipment"."user_id";`;

  pool.query(queryText, [id])
    .then((result) => {
      res.send(result.rows[0].equipment_available);
    })
    .catch((error) => {
      console.log('error', error);

      res.sendStatus(500);
    })
});
// #endregion ====


// buildDailyWorkout is the parent function that ultimately returns 
// the daily workout for a given user. Several helper functions are
// called within it to filter through the exercises and narrow them 
// down to one single workout
const buildDailyWorkout = async (dayOfWeek, workoutTemplates, exerciseHistory, equipmentAvailable, allExercises) => {

  // calls 'selectTemplate' function and assigns return value to variable
  // 'targetValuesList' is an array of all the exercise values given pulled 
  // from the selected template
  let selectedTemplate = selectTemplate(dayOfWeek, workoutTemplates);
  let targetValuesList = grabTargetValues(selectedTemplate);
  // console.log('selectedTemplate', selectedTemplate);
  // console.log('targetValuesList', targetValuesList);

  // removes all exercises that user has already completed 
  // during the week
  let newExercises = filterHistory(allExercises, exerciseHistory);
  // console.log('newExercises', newExercises);

  // returns all exercises that include equipment available to user
  let equipmentMatches = filterEquipment(newExercises, equipmentAvailable);
  // console.log('equipmentMatches', equipmentMatches);

  // returns an object containing an array of all eligible exercises
  // where the exercise's target value matched the targetValuesList value
  let templateMatches = filterExercises(equipmentMatches, targetValuesList);
  // console.log('templateMatches', templateMatches);

  let dailyWorkout = selectExercises(templateMatches);
  // console.log('dailyWorkout', dailyWorkout);

  return dailyWorkout;
}


// #region ==== HELPER FUNCTIONS ====
const selectTemplate = (dayOfWeek, workoutTemplates) => {
  let selectedTemplate = 0;
  switch (dayOfWeek) {
    case 1:
      selectedTemplate = workoutTemplates[0];
      break;
    case 2:
      selectedTemplate = workoutTemplates[1];
      break;
    case 3:
      selectedTemplate = workoutTemplates[2]
      break;
    case 4:
      selectedTemplate = workoutTemplates[3];
      break;
    default:
      console.log('Unable to assign workout');
  }

  return selectedTemplate;
}


const grabTargetValues = (selectedTemplate) => {
  let targetValuesList = Object.values(selectedTemplate);

  targetValuesList.shift();
  targetValuesList.shift();

  return targetValuesList;
}


const filterHistory = (allExercises, exerciseHistory) => {
  let newExercises = [];

  for (let i = 0; i < allExercises.length; i++) {
    for (let j = 0; j < exerciseHistory.length; j++) {
      if (allExercises[i].id !== exerciseHistory[j]) {
        newExercises.push(allExercises[i]);
      }
    }
  }

  return newExercises;
}


const filterEquipment = (newExercises, equipmentAvailable) => {

  let equipmentMatches = [];

  for (let i = 0; i < newExercises.length; i++) {
    for (let j = 0; j < equipmentAvailable.length; j++) {
      if (newExercises[i].equipment === equipmentAvailable[j]) {
        equipmentMatches.push(newExercises[i]);
      }
    }
  }

  return equipmentMatches;
}


const filterExercises = (equipmentMatches, targetValuesList) => {
  let templateMatches = {
    e_ones: [],
    e_twos: [],
    e_threes: [],
    e_fours: [],
    e_fives: [],
    e_sixes: [],
    e_sevens: [],
    e_eights: [],
    e_nines: [],
    e_tens: [],
    e_elevens: []
  }

  for (let i = 0; i < equipmentMatches.length; i++) {
    switch (equipmentMatches[i].target) {
      case targetValuesList[0]:
        templateMatches.e_ones.push(equipmentMatches[i]);
        break;
      case targetValuesList[1]:
        templateMatches.e_twos.push(equipmentMatches[i]);
        break;
      case targetValuesList[2]:
        templateMatches.e_threes.push(equipmentMatches[i]);
        break;
      case targetValuesList[3]:
        templateMatches.e_fours.push(equipmentMatches[i]);
        break;
      case targetValuesList[4]:
        templateMatches.e_fives.push(equipmentMatches[i]);
        break;
      case targetValuesList[5]:
        templateMatches.e_sixes.push(equipmentMatches[i]);
        break;
      case targetValuesList[6]:
        templateMatches.e_sevens.push(equipmentMatches[i]);
        break;
      case targetValuesList[7]:
        templateMatches.e_eights.push(equipmentMatches[i]);
        break;
      case targetValuesList[8]:
        templateMatches.e_nines.push(equipmentMatches[i]);
        break;
      case targetValuesList[9]:
        templateMatches.e_tens.push(equipmentMatches[i]);
        break;
      case targetValuesList[10]:
        templateMatches.e_elevens.push(equipmentMatches[i]);
        break;
    }
  }

  return templateMatches;
}

let selectExercises = (templateMatches) => {
  let dailyWorkout = [];

  for (templateMatchesProperty in templateMatches) {

    // this loop is evaluating each property within 'templateMatches',
    // which is an array
    let exerciseArray = templateMatches[templateMatchesProperty];

    // get random index value
    const randomIndex = Math.floor(Math.random() * exerciseArray.length);

    // get random exercise
    const exercise = exerciseArray[randomIndex];
  
    dailyWorkout.push(exercise);
  }

  return dailyWorkout;
}

// 'getRandomExercise' randomly selects on exercise from 
// the given array and returns it as an object to be added
// to the user's daily workout
let getRandomExercise = (exerciseArray) => {
  console.log('exerciseArray', exerciseArray);


  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random exercise
  const exercise = arr[randomIndex];

  return exercise;
}
// #endregion ====

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;