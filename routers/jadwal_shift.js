const express = require("express");
const jadwal_shift = require("../controllers/jadwal_shift");
const router = express.Router();

router.get("/jadwal_shift", jadwal_shift.all);
router.get("/jadwal_shift/:id", jadwal_shift.cari);
router.post("/jadwal_shift", jadwal_shift.simpan);
router.put("/jadwal_shift/:id", jadwal_shift.edit);

module.exports = router;
