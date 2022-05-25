const express = require("express");
const shift = require("../controllers/shift");
const router = express.Router();

router.get("/shift", shift.all);
router.get("/shift/:id", shift.cari);
router.post("/shift", shift.simpan);
router.put("/shift/:id", shift.edit);

module.exports = router;
