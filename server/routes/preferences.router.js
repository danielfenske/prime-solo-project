const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    default: axios
} = require('axios');

// get user preferences 
router.get('/', (req, res) => {
    let id = req.user.id;

    if (req.isAuthenticated()) {
        // selects all user preferences associated with user id
        let queryText = `SELECT * FROM "user_preferences" WHERE id = $1;`

        pool.query(queryText, [id])
            .then((result) => {
                let preferences = result.rows;                

                res.send(preferences[0]);
            })
            .catch((error) => {
                res.sendStatus(500);
            })
    } else {
        sendStatus(403);
    }
});

router.get('/equipment', (req, res) => {
    let id = req.user.id;

    if (req.isAuthenticated()) {
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
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;