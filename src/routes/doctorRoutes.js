const express = require('express');
const doctorController = require("../controllers/doctorController")

const router = express.Router()

router.get("/doctors", doctorController.getAllDoctors)

module.exports = router