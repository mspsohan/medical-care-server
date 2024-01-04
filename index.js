const express = require('express');
const connecDB = require('./src/db/connecDB');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
const morgan = require('morgan');

// middleWares
const corsOption = {
   origin: ['http://localhost:5173'],
   credentials: true,
}
app.use(cors(corsOption))
app.use(express.json())
app.use(morgan('dev'))


// All Routes
const userRoutes = require('./src/routes/userRoutes');

// Use All Routes
app.use('/', userRoutes);


// Check the Server up or Down
app.get('/', (req, res) => {
   res.send("Medical Care Server is Running")
})

// handle all Unneccery Routes
app.all("*", (req, res, next) => {
   const error = new Error(`Can't find ${req.originalUrl} on the server`)
   error.status = 404;
   next(error)
})
// error handling middleware
app.use((err, req, res, next) => {
   res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors
   })
})

// Database Connectiong 
const main = async () => {
   await connecDB()
   app.listen(port, () => {
      console.log(`Server is running on Port: ${port}`)
   })
}

main()
