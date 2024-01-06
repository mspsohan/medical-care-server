const express = require('express');
const appointmentController = require("../controllers/appointmentController")

const router = express.Router()

router.get("/appointments", appointmentController.getAppointment)
router.post("/appointment", appointmentController.saveAppointment)

module.exports = router

