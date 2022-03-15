const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const dummyExerciseData = require('../modules/dummyExerciseData');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('dummyExerciseData in template.router.js', dummyExerciseData);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
