const appointmentCollection = require("../models/Appointments");

// Get all appointments
const getAppointment = async (req, res) => {
   try {
      const result = await appointmentCollection.find();
      res.status(200).send(result);
   } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).send("Internal Server Error");
   }
};


// save Appointment
const saveAppointment = async (req, res) => {
   const appointmentData = req.body
   const saveAppointment = new appointmentCollection({
      ...appointmentData,
      date: appointmentData.date.split("-").reverse().join("-")
   })
   try {
      const result = await saveAppointment.save()
      res.send(result)
   } catch (error) {
      console.log(error.message)
   }
}

module.exports = { getAppointment, saveAppointment }