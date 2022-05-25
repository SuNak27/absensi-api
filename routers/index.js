const express = require("express");
const router = express.Router();

const authorize = require("../middleware/authorize");

router.use(require("./admin"));
router.use(authorize, require("./karyawan"));
router.use(authorize, require("./shift"));
router.use(authorize, require("./jadwal_shift"));

module.exports = router;
