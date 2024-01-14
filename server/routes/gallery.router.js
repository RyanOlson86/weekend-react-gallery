const express = require("express");
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  const queryText =`UPDATE "gallery" SET likes= likes + 1 WHERE id=$1;`
  const queryParams = [req.params.id]
  console.log(queryParams)

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
  console.log('in GET')
  const queryText = `SELECT * FROM "gallery";`;
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

module.exports = router;
