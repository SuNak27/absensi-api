const express = require("express");
const jadwal = require("../controllers/jadwal");
const router = express.Router();

router.get("/jadwal", jadwal.all);
router.get("/jadwal/karyawan/:id_karyawan", jadwal.cariByKaryawan);
router.get(
  "/jadwal/karyawan/:id_karyawan/bulan/:bulan",
  jadwal.cariByKaryawanAndBulan
);
router.post("/jadwal", jadwal.simpan);
router.put("/jadwal/:id", jadwal.edit);

module.exports = router;
