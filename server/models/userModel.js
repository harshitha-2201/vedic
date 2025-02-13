// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
<<<<<<< HEAD
=======
  role: { type: String, default: 'user' }
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

});

module.exports = mongoose.model('User', userSchema);
