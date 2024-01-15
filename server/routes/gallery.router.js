const express = require("express");
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  const queryText =`UPDATE "gallery" SET likes= likes + 1 WHERE id=$1;`
  const queryParams = [req.params.id]

  pool
    .query(queryText, queryParams)
    .then((result) => {
      console.log('in PUT')
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });

});

// GET /gallery
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "gallery"`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// POST /gallery
router.post("/", (req, res) => {
  const queryText = `INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ($1, $2, $3)`;
  const queryParams = [req.body.url, req.body.title, req.body.description]
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// DELETE /gallery
router.delete("/:id", (req, res) => {
  const queryText = `DELETE FROM "gallery" WHERE "id"=$1;`;
  const queryParams = [req.params.id]
  pool
    .query(queryText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in DELETE',err);
      res.sendStatus(500);
    });
});

module.exports = router;
