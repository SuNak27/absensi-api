const express = require("express");
const router = express.Router();

const authorize = require("../middleware/authorize");

router.use(require("./pengurus"));

module.exports = router;
