const router = require("express").Router();
const pool = require("../config/config.js");

// List all films
router.get("/", (req, res) => {
  const query = `SELECT * FROM film ORDER BY film_id`;
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ message: "Film not found" });
      } else {
        res.status(200).json(result.rows);
      }
    }
  });
});

// List film by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM film WHERE film_id = $1`;
  pool.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.rows.length === 0) {
        res.status(404).send({ message: "Film not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    }
  });
});

// List film by category id
router.get("/category/:id", (req, res) => {
  const { id } = req.params;

  const query = `
  SELECT
  c.category_id,
  c.name AS category,
  f.*
  FROM film_category AS fc
  INNER JOIN category AS c
    ON c.category_id = fc.category_id
  INNER JOIN film AS f
    ON f.film_id = fc.film_id
  WHERE c.category_id = $1`;

  pool.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.rows.length === 0) {
        res.status(404).send({ message: "Film not found" });
      } else {
        res.json(result.rows);
      }
    }
  });
});

module.exports = router;
