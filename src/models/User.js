const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({}, { strict: false })

const UserCollection = mongoose.model("User", userSchema)

module.exports = UserCollection