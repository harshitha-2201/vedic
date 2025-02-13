const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const User = require('../models/userModel');


// Fetch all appointments
const getAppointments = async (req, res) => {

  try {
    const appointments = await Appointment.find().populate('clientId');
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  const { appointmentId, status } = req.body;
  
  try {
    // Validate status
    if (!['accepted', 'declined'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    // Find the appointment by ID
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    // Update status
    appointment.status = status;
    await appointment.save();

    res.status(200).json({ message: 'Appointment status updated', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Update client profile
const updateClientProfile = async (req, res) => {
  const { id, name, email, phone } = req.body;
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();
    res.status(200).json({ message: 'User profile updated', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAppointments, updateAppointmentStatus, updateClientProfile };