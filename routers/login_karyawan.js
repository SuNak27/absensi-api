const express = require("express");
const router = express.Router();

const karyawan_login = require("../controllers/karyawan_login");

router.post("/karyawan/register/:id", karyawan_login.register);
router.post("/karyawan/login", karyawan_login.login);

module.exports = router;
