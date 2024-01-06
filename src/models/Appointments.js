const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const appointmentSchema = new Schema({}, { strict: false });

const appointmentCollection = model('Appointment', appointmentSchema);

module.exports = appointmentCollection;
