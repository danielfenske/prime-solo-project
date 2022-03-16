const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const dummyExerciseData = require('../modules/dummyExerciseData');
const phaseData = require('../modules/phaseData');

// 'dailyWorkout' is the workout that will be sent to the user
// after all filters have been applied

// 'workoutTemplates' represents all templates that 
// correspond with the user's days_per_week value
// // 'selectedTemplate' represents the selected template 
// // that corresponds with the day the user is on
let workoutTemplates;
let selectedTemplate;
let eligibleExercises = [];

// #region ==== GET ROUTES ====
// get user preferences 
router.get('/preferences', (req, res) => {
  let id = 3; // req.params.id

  let queryText = `SELECT * FROM "user_preferences" WHERE id = $1;`

  pool.query(queryText, [id])
    .then((result) => {
      res.send(result.rows);

      let preferences = result.rows;

      console.log('preferences', preferences);
      console.log('phaseData', phaseData);

    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

// get workout request first starts with grabbing all eligible
// templates from the database and selecting one template that corresponds
// to the day the user is on in their week (ex: working out twice a week, on second day)
router.get('/', (req, res) => {
  let phase = 'endurance'; // req.body.phase
  let days_per_week = 1; // req.body.days_per_week
  let day = 1; // req.body.day

  let queryText = `SELECT * FROM "full_body_workouts" WHERE "days_per_week" = $1 ORDER BY "id";`;

  pool.query(queryText, [days_per_week])
    .then((result) => {
      workoutTemplates = result.rows;

      switch (day) {
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

      selectExercises(selectedTemplate, dummyExerciseData);
      res.send(eligibleExercises);
    })
    .catch((error) => {
      console.log('error', error);

      res.sendStatus(500);
    })
})
// #endregion ====

function selectExercises(obj, array) {

  const exercises = Object.values(obj);

  console.log('exercises', exercises);

  let e_ones = [];
  let e_twos = [];
  let e_threes = [];
  let e_fours = [];
  let e_fives = [];
  let e_sixes = [];
  let e_sevens = [];
  let e_eights = [];
  let e_nines = [];
  let e_tens = [];
  let e_elevens = [];

  // for (let i = 0; i < dummyExerciseData.length; i++) {

  //   for (let j = 0; j < exercises.length; j++) {
  //     if (dummyExerciseData[i].target === exercises[j]) {
  //       eligibleExercises.push(dummyExerciseData[i]);
  //     }
  //   }
  // }

  for (let i = 0; i < dummyExerciseData.length; i++) {
    switch (dummyExerciseData[i].target) {
      case exercises[2]:
        e_ones.push(dummyExerciseData[i]);
        break;
      case exercises[3]:
        e_twos.push(dummyExerciseData[i]);
        break;
      case exercises[4]:
        e_threes.push(dummyExerciseData[i]);
        break;
      case exercises[5]:
        e_fours.push(dummyExerciseData[i]);
        break;
      case exercises[6]:
        e_fives.push(dummyExerciseData[i]);
        break;
      case exercises[7]:
        e_sixes.push(dummyExerciseData[i]);
        break;
      case exercises[8]:
        e_sevens.push(dummyExerciseData[i]);
        break;
      case exercises[9]:
        e_eights.push(dummyExerciseData[i]);
        break;
      case exercises[10]:
        e_nines.push(dummyExerciseData[i]);
        break;
      case exercises[11]:
        e_tens.push(dummyExerciseData[i]);
        break;
      case exercises[12]:
        e_elevens.push(dummyExerciseData[i]);
        break;
    }
  }

  // console.log('e_ones', e_ones);
  // console.log('e_twos', e_twos);
  // console.log('e_threes ', e_threes ); // look over
  // console.log('e_fours', e_fours);
  // console.log('e_fives', e_fives);
  // console.log('e_sixes', e_sixes);
  // console.log('e_sevens ', e_sevens );
  console.log('e_eights ', e_eights );
  // console.log('e_nines', e_nines);
  // console.log('e_tens ', e_tens );
  // console.log('e_elevens', e_elevens);
}

// 'getRandomExercise' randomly selects on exercise from 
// the given array and returns it as an object to be added
// to the workout for that day
function getRandomExercise(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random exercise
  const exercise = arr[randomIndex];

  dailyWorkout.push(exercise);

  return item;
}

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;