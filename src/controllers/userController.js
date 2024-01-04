const UserCollection = require('../models/User');


// Get user Role
const getRole = async (req, res) => {
   const email = req.params.email;
   const result = await UserCollection.findOne({ email: email });
   res.send(result);
};

//  Get All User Data
const getUser = async (req, res) => {
   try {
      const result = await UserCollection.find()
      res.status(200).send(result);
   } catch (error) {
      res.status(500).send({ error: 'Server error' });
   }
};

const saveUser = async (req, res) => {
   try {
      const email = req.params.email;
      console.log(email)
      const userData = req.body;
      console.log(userData)
      const query = { email: email };
      const options = { upsert: true, new: true, setDefaultsOnInsert: true };

      // Check if the user already exists
      const existingUser = await UserCollection.findOne(query);

      if (existingUser) {
         return res.status(409).send({ message: 'User already exists' });
      } else {
         // if not exist, save the data with a timestamp
         userData.timestamp = new Date();
         const newUser = await UserCollection.findOneAndUpdate(query, userData, options);

         return res.status(200).send({ message: 'User saved successfully', user: newUser });
      }
   } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal server error' });
   }
};

module.exports = { getRole, getUser, saveUser };
