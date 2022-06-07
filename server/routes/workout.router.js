const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const phaseData = require('../modules/phaseData');
const {
  default: axios
} = require('axios');

const dummyExerciseData = require('../modules/dummyExerciseData');
const buildDailyWorkout = require('../modules/buildDailyWorkout');
const selectNewExercise = require('../modules/selectNewExercise');

// #region ==== GET ROUTES ====
// get workout request first starts with grabbing all eligible
// templates from the database and selecting one template that corresponds
// to the day the user is on in their week (ex: working out twice a week, on second day)
router.post('/', async (req, res) => {
  let id = req.user.id
  let dayOfWeek = req.body.dayOfWeek;
  let phase = req.body.phase;


  let table;
  let daysQuery;
  let targetWorkout;

  // if (req.isAuthenticated()) {

  if (typeof dayOfWeek === 'string') {
    table = 'split_workouts';
    column = 'body_region';
    targetWorkout = dayOfWeek;

  } else if (typeof dayOfWeek === 'number') {

    table = 'full_body_workouts';
    column = 'days_per_week';
    dayOfWeek = Number(dayOfWeek);

    // pulls user's days_per_week integer in database to determine which templates they are eligible for
    daysQuery = await pool.query(
      `SELECT "user_preferences"."days_per_week" FROM "user_preferences" WHERE "user_id"=$1;`,
      [id]);
    targetWorkout = daysQuery.rows[0].days_per_week;

  }

  console.log('targetWorkout', targetWorkout);

  // selects all eligible templates based off of user's daysPerWeek value
  // example: user who exercises 2/week will be given two rows from full_body_workouts table
  const templatesQuery = await pool.query(
    `SELECT * FROM ${table} WHERE ${column} = $1 ORDER BY "id";`,
    [targetWorkout]);

  const workoutTemplates = templatesQuery.rows;

  console.log('workoutTemplates', workoutTemplates);

  //   // selects array of exercises IDs previously provided to user 
  //   const historyQuery = await pool.query(
  //     `SELECT array_agg("user_exercises"."API_id") AS exercise_id
  //       FROM "user_exercises" 
  //       WHERE "user_exercises"."user_id" = $1;`, [id]
  //   )

  //   // exerciseHistory is used to prevent user from receiving exercises 
  //   // previously done the day before. If they don't have any exercises
  //   // in the table (new signup), the variable will be declared as 'none'
  //     // note: 'null' value will break the route and cause server to shutdown
  //   let exerciseHistory;

  //   if (historyQuery.rows[0].exercise_id === null) {
  //     exerciseHistory = ['none'];
  //   } else {
  //     exerciseHistory = historyQuery.rows[0].exercise_id;
  //   }




  //   // selects array of equipment available to the user
  //   const equipmentQuery = await pool.query(
  //     `SELECT array_agg("equipment"."name") AS equipment_available
  //     FROM "users_equipment" 
  //     JOIN "user" ON "users_equipment"."user_id" = "user"."id"
  //     JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"

  //     WHERE "users_equipment"."user_id" = $1
  //     GROUP BY "users_equipment"."user_id";`, [id]
  //   )

  //   // equipmentAvailable represents an array of equipment available to the user
  //   // this is needed to determine exercises that match equipment in this list
  //   const equipmentAvailable = equipmentQuery.rows[0].equipment_available;




  //   // grabs exercise data from ExerciseDB database (1,300 total)
  //     // note: all exercises are grabbed at once because their is a limitation
  //     // on how many API requests can be made per month per user (500/month)
  //   const exerciseAPIQuery = await axios.get(`https://exercisedb.p.rapidapi.com/exercises`, {
  //     headers: {
  //       'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  //       'x-rapidapi-key': `${process.env.EXERCISE_DB_API_KEY}`
  //     }
  //   })
  //   const allExercises = exerciseAPIQuery.data;
  //   // const allExercises = dummyExerciseData;



  //   // buildDailyWorkout takes in all information grabbed about as input parameters for 
  //   // determining the user's 11 total exercises. The variable 'finalDailyWorkout' is the return value of 
  //   // this function, which is an array of 11 exercises
  //   const finalDailyWorkout = await buildDailyWorkout(dayOfWeek, phase, workoutTemplates, exerciseHistory, equipmentAvailable, allExercises);


  //   // before new set of exercises is added, all exercises previously held in DB (will always be 11)
  //   // is removed from the DB 
  //   await pool.query(`DELETE FROM "user_exercises" WHERE "user_id" = $1`, [id]);


  //   // every exercise (object) held within finalDailyWorkout is added 
  //   // to the database via a loop
  //   for (let exercise of finalDailyWorkout) {

  //     // adds each exercise object within array to DB 
  //     await pool.query(
  //       `INSERT INTO "user_exercises" ("user_id", "bodyPart", "equipment", "gifUrl", "API_id", "name", "target", "sets", "reps")
  //        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
  //       [id, exercise.bodyPart, exercise.equipment, exercise.gifUrl, exercise.id, exercise.name, exercise.target, exercise.sets, exercise.reps]);
  //   }

  //   // once every exercise is added to the DB, a query is called  to grab all eleven exercises
  //   // to be sent back to the user
  //   const userDailyWorkoutQuery = await pool.query(`SELECT * FROM "user_exercises" WHERE "user_id" = $1 ORDER BY "id";`, [id]);

  //   // workout array of eleven exercises declared as 'userDailyWorkout' and sent to client
  //   const userDailyWorkout = userDailyWorkoutQuery.rows;
  //   res.send(userDailyWorkout);

  // } else {
  //   res.sendStatus(403);
  // }
});


// grabs the user's set of eleven exercises from the DB
// this route was established for whenever a user
// signs back into the app or refreshes their page
router.get('/current', (req, res) => {
  let id = req.user.id;

  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "user_exercises" WHERE "user_id" = $1 ORDER BY "id";`;

    pool.query(queryText, [id])
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('err', error);

        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
})

// this route sends the phase data held in the phaseData.js file
// which includes a description, rest amount, and sets/reps for each phase (ex: 'endurance')
router.get('/phases', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(phaseData);
  } else {
    res.sendStatus(403);
  }
})
// #endregion ====



// #region ==== PUT ROUTES ====
// this route swaps out an exercise held in the DB 
// with a new exercise that includes the same body region
// is initiated whenever a user clicks the 'swap' button
router.put('/swap/:target/:id', async (req, res) => {
  // variables represent everything needed from the client 
  // to successfully replace old exercise with a new one
  let target = req.params.target;
  let exerciseId = req.params.id;
  let userId = req.user.id;

  if (req.isAuthenticated()) {
    // grabs exercise data from ExerciseDB database (related to target muscle)
    const exerciseAPIQuery = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`, {
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.EXERCISE_DB_API_KEY}`
      }
    })

    const targetExercises = exerciseAPIQuery.data;

    // selects array of equipment available to the user
    // this is done to eliminate all exercises that do not match
    // user's equipment available to them
    const equipmentQuery = await pool.query(
      `SELECT array_agg("equipment"."name") AS equipment_available
      FROM "users_equipment" 
      JOIN "user" ON "users_equipment"."user_id" = "user"."id"
      JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
      
      WHERE "users_equipment"."user_id" = $1
      GROUP BY "users_equipment"."user_id";`, [userId]
    )
    const equipmentAvailable = equipmentQuery.rows[0].equipment_available;


    // selectNewExercise takes in all exercise matches from the exerciseDB API, 
    // all equipment available to user, and the exercise ID the user wants to swap out 
    // to determine a new exercise, which is what the return value will be
    const swappedExercise = selectNewExercise(targetExercises, equipmentAvailable, exerciseId);


    // once a new exercise is chosen, all applicable cells within the DB are updated to the new information 
    // given in the swapped selected exercise
    await pool.query(`UPDATE "user_exercises" SET "bodyPart" = $1, "equipment" = $2, "gifUrl" = $3, "API_id" = $4, "name" = $5
    WHERE "id" = $6;`, [swappedExercise.bodyPart, swappedExercise.equipment, swappedExercise.gifUrl, swappedExercise.id, swappedExercise.name, exerciseId]);

    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
})

// this route updates the status of an exercise between complete and not complete 
// so that users can track their progress as they work through completing the workout
router.put('/update/:exerciseId', (req, res) => {
  let isComplete = req.body.isComplete;
  let exerciseId = req.params.exerciseId;

  if (req.isAuthenticated()) {
    let queryText = `UPDATE "user_exercises" SET "isComplete" = $1 WHERE "id" = $2;`;

    pool.query(queryText, [isComplete, exerciseId])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('Error UPDATING exercise', error);
      })
  }
})
// #endregion ====

module.exports = router;