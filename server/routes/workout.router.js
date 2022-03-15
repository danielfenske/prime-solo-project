const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const dummyExerciseData = require('../modules/dummyExerciseData');

let preferences = [];

// #region ==== GET ROUTES ====
// get user preferences 
router.get('/preferences', (req, res) => {
  let id = 3
  
  let queryText = `SELECT * FROM "user_preferences" WHERE id = $1;`

  pool.query(queryText, [id])
    .then((result) => {
      res.send(result.rows);

      preferences = result.rows;

      console.log('preferences', preferences);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});
// #endregion ====

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
