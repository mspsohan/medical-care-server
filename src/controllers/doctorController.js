const doctorCollection = require("../models/Doctors");

// Get all Doctors Info
const getAllDoctors = async (req, res) => {
   try {
      const result = await doctorCollection.find();
      res.status(200).send(result);
   } catch (error) {
      console.error("Error fetching doctors:", error);
      res.status(500).send("Internal Server Error");
   }
};

module.exports = { getAllDoctors };
