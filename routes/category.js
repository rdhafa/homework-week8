const router = require("express").Router();
const pool = require("../config/config.js");

// List all categories
router.get("/", (req, res) => {
  const query = `SELECT * FROM category`;
  pool.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.rows.length === 0) {
        res.status(404).json({ message: "Category not found" });
      } else {
        res.status(200).json(result.rows);
      }
    }
  });
});

module.exports = router;
