const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/costume', (req, res) => {
    

    const queryText = `SELECT * FROM "costume"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [ req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
router.get('/r-arm', (req, res) => {
    

    const queryText = `SELECT * FROM "r-arm"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
router.get('/l-arm', (req, res) => {
    

    const queryText = `SELECT * FROM "l-arm"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
router.get('/head', (req, res) => {
    

    const queryText = `SELECT * FROM "head"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
router.get('/chest', (req, res) => {
    

    const queryText = `SELECT * FROM "chest"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
router.get('/l-leg', (req, res) => {
    

    const queryText = `SELECT * FROM "l-leg"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
router.get('/r-leg', (req, res) => {
    

    const queryText = `SELECT * FROM "r-leg"
    JOIN "hero" ON "hero"."id" = "hero_id"
    WHERE "hero"."name" = $1;`

    pool.query(queryText, [req.query.title])
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/pit', (req, res) => {

    console.log(req.body)
    let proj = req.body
    const queryText = `INSERT INTO "body_pit" ( "image", "hero_id", "user_id")
                       VALUES ($1, $2, $3)`
    pool.query(queryText, [proj.image, proj.hero, proj.user])
        .then((result) => {

            res.sendStatus(201)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;