const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const doctorsSchema = new Schema({}, { strict: false });

const doctorCollection = model('DoctorsInfo', doctorsSchema);

module.exports = doctorCollection;
