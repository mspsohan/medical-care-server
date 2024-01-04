const mongoose = require('mongoose');
require("dotenv").config();


const connecDB = async () => {
   console.log("Connecting to Database")
   const mongoURI = process.env.MONGODB_URI
   await mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
   console.log("Medical Care is Connected to Database")

};
module.exports = connecDB;