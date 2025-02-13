const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({

    appointmentDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User collection
  });

module.exports = mongoose.model('Appointment', appointmentSchema);