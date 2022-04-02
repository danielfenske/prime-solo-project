const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    default: axios
} = require('axios');


// get all equipment available
// explained: this route grabs all equipment to be sent to the client for whenever a user initially signs up or wants to edit their equipment list
router.get('/equipment', (req, res) => {

    if (req.isAuthenticated()) {
        // selects all equipment listed in DB
        let queryText = `SELECT "equipment"."id", "equipment"."name", "equipment"."img_url" from "equipment" ORDER BY "equipment"."id";`;

        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                console.log('error', error);

                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;