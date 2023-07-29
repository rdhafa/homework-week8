const router = require("express").Router();
const filmRouter = require("./film.js");
const categoryRouter = require("./category.js");

router.use("/films", filmRouter);
router.use("/categories", categoryRouter);

module.exports = router;
