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
        // let queryText = `SELECT array_agg("equipment"."name") AS "equipment_list" FROM "equipment";`;
        let queryText = `SELECT "equipment"."id", "equipment"."name" from "equipment";`;

        pool.query(queryText)
            .then((result) => {
                // res.send(result.rows[0].equipment_list);
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

// post new equipment list 
router.post('/equipment/:id', (req, res) => {

    let userId = req.user.id;
    let equipmentId = req.params.id;

    if (req.isAuthenticated()) {
        let queryText = 
        `INSERT INTO "users_equipment" ("user_id", "equipment_id") 
        VALUES ($1, $2);`

        pool.query(queryText, [userId, equipmentId])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log('error', error);
                
                
                res.sendStatus(500);
            })
    }
    
})

module.exports = router;