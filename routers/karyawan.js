const express = require("express");
const karyawan = require("../controllers/karyawan");
const router = express.Router();

router.get("/karyawan", karyawan.all);
router.get("/karyawan/:id", karyawan.cari);
router.post("/karyawan", karyawan.simpan);
router.put("/karyawan/:id", karyawan.edit);

module.exports = router;
