const fs = require("fs");
const pool = require("../config/config.js");

const seedQuery = fs.readFileSync("./db/seed.sql", { encoding: "utf-8" });

pool.query(seedQuery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Seeding successful!`);
  }
});
