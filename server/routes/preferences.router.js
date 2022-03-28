const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    default: axios
} = require('axios');

// #region ==== PREFERENCES ROUTES ====
// get user preferences 
router.get('/', (req, res) => {
    let id = req.user.id;

    if (req.isAuthenticated()) {
        // selects all user preferences associated with user id
        let queryText = `SELECT * FROM "user_preferences" WHERE "user_id" = $1;`

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

router.post('/', async (req, res) => {
    let id = req.user.id;
    let name = req.body.name;
    let weight = req.body.weight;
    let height = req.body.height;
    let age = req.body.age;
    let days_per_week = req.body.days_per_week;
    let routine = req.body.routine;

    let bodyWeightId = 2;

    if (req.isAuthenticated()) {

        await pool.query(`INSERT INTO "user_preferences" ("user_id", "name", "weight", "height", "age", "days_per_week", "routine")
        VALUES ($1, $2, $3, $4, $5, $6, $7);`,
            [id, name, weight, height, age, days_per_week, routine]);

        await pool.query(`UPDATE "user" SET "form_complete" = TRUE WHERE "id" = $1`, [id]);

        await pool.query(`
        DELETE FROM "users_equipment" 
        WHERE "user_id" = $1 
        AND "equipment_id" = $2;`, [id, bodyWeightId]);

        await pool.query(`INSERT INTO "users_equipment" ("user_id", "equipment_id") 
        VALUES ($1, $2);`, [id, bodyWeightId]);

        res.sendStatus(201);
    } else {
        res.sendStatus(403);
    }
})

router.put(`/metrics/edit`, (req, res) => {
    let name = req.body.name;
    let weight = req.body.weight;
    let height = req.body.height;
    let age = req.body.age;
    let userId = req.user.id;

    let queryText = 
    `UPDATE "user_preferences" 
    SET "name" = $1, "weight" = $2, "height" = $3, "age" = $4 
    WHERE "user_id" = $5;`

    pool.query(queryText, [name, weight, height, age, userId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
})
// #endregion ====

// #region ==== EQUIPMENT ROUTES ====
router.get('/equipment', (req, res) => {
    let id = req.user.id;

    if (req.isAuthenticated()) {

        let queryText = `SELECT "equipment"."id", "equipment"."name", "equipment"."img_url"
  
    FROM "users_equipment" 
    JOIN "user" ON "users_equipment"."user_id" = "user"."id"
    JOIN "equipment" ON "equipment"."id" = "users_equipment"."equipment_id"
    
    WHERE "users_equipment"."user_id" = $1;`;

        pool.query(queryText, [id])
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
// #endregion ====


// #region ==== MAXES ROUTES ====
router.get('/maxes/:muscle', (req, res) => {
    let id = req.user.id;
    let muscle_group = req.params.muscle;

    if (req.isAuthenticated()) {
        // selects all exercise maxes associated with user id
        let queryText = `SELECT * FROM "exercise_maxes" WHERE "user_id" = $1 AND "muscle_group" = $2;`;

        pool.query(queryText, [id, muscle_group])
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                res.sendStatus(500);
            })
    } else {
        sendStatus(403);
    }
});

router.post('/maxes', (req, res) => {
    let id = req.user.id;

    if (req.isAuthenticated()) {
        // insert user exercise max into DB 
        let queryText = `INSERT INTO "exercise_maxes" ("user_id", "exercise", "weight", "reps", "muscle_group")
        VALUES ($1, $2, $3, $4, $5);`;

        pool.query(queryText, [id, req.body.exercise, req.body.weight, req.body.reps, req.body.muscleGroup])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log('error', error);

                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.delete(`/maxes/:id`, (req, res) => {
    let id = req.params.id;

    if (req.isAuthenticated()) {
        let queryText = `DELETE FROM "exercise_maxes" WHERE "id" = $1;`;

        pool.query(queryText, [id])
            .then((result) => {
                res.sendStatus(200);
            })
            .catch((error) => {
                console.log('error', error);

                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})
// #endregion ====

module.exports = router;