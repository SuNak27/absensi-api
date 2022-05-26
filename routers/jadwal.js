const express = require("express");
const jadwal = require("../controllers/jadwal");
const router = express.Router();

router.get("/jadwal", jadwal.all);
router.get("/jadwal/:id", jadwal.cari);
router.post("/jadwal", jadwal.simpan);
router.put("/jadwal/:id", jadwal.edit);

module.exports = router;
