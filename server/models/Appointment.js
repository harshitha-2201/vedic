const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
<<<<<<< HEAD
  clientId: {
=======
  userId: {
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
<<<<<<< HEAD
=======
  status: { type: String, enum: ['Pending', 'Accepted', 'Declined'], default: 'Pending' }
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
});

module.exports = mongoose.model('Appointment', appointmentSchema);
