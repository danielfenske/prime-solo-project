const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const phaseData = require('../modules/phaseData');
const {
  default: axios
} = require('axios');

const dummyExerciseData = require('../modules/dummyExerciseData');
const buildDailyWorkout = require('../modules/buildDailyWorkout');

// #region ==== GET ROUTES ====
// get workout request first starts with grabbing all eligible
// templates from the database and selecting one template that corresponds
// to the day the user is on in their week (ex: working out twice a week, on second day)
router.get('/:dayOfWeek/:phase', async (req, res) => {
  const id = req.user.id
  const dayOfWeek = Number(req.params.dayOfWeek);
  const phase = req.params.phase;

  console.log('req.params', req.params);
  
  // console.log('req.body', req);
  // console.log('dayOfWeek', dayOfWeek);
  // console.log('phase', phase);
  

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

    // grabs exercise data from ExerciseDB database
    const exerciseAPIQuery = await axios.get(`https://exercisedb.p.rapidapi.com/exercises`, {
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': `${process.env.EXERCISE_DB_API_KEY}`
      }
    })
    const allExercises = exerciseAPIQuery.data;
    // const allExercises = dummyExerciseData;

    // initiates all buildDailyWorkout function and sends all data grabbed before as 
    // necessary values for determine dailyWorkout
    const dailyWorkout = await buildDailyWorkout(dayOfWeek, workoutTemplates, exerciseHistory, equipmentAvailable, allExercises);

    res.send(dailyWorkout);

  } else {
    res.sendStatus(403);
  }
})
// #endregion ====

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;