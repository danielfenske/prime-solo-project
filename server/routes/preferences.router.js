const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  default: axios
} = require('axios');

// get user preferences 
router.get('/', (req, res) => {
    let id = req.user.id;

    // selects all user preferences associated with user id
    let queryText = `SELECT * FROM "user_preferences" WHERE id = $1;`

    pool.query(queryText, [id])
        .then((result) => {
            let preferences = result.rows;

            res.send(preferences);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
});

module.exports = router;