const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    default: axios
} = require('axios');


// get all equipment available
router.get('/equipment', (req, res) => {

    if (req.isAuthenticated()) {
        // selects all equipment listed in DB
        let queryText = `SELECT array_agg("equipment"."name") AS "equipment_list" FROM "equipment";`;

        pool.query(queryText)
            .then((result) => {
                res.send(result.rows[0].equipment_list);
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