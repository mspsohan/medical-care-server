const express = require('express');
const userController = require("../controllers/userController")

const router = express.Router()

router.get("/user/:email", userController.getRole)
router.get("/users", userController.getUser)
router.post("/users/:email", userController.saveUser)

module.exports = router

