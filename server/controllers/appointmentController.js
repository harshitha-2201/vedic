const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const User = require('../models/userModel');

// Create an appointment
const createAppointment = async (req, res) => {
  console.log('User ID from req.user:', req.user?.id); // Debugging
  if (!req.user || !req.user.id) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const { name, email, phone, date } = req.body;
    const id  = req.user.id;

    const newAppointment = new Appointment({
      clientId :  id ,
      name,
      email,
      phone,
      date,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


module.exports = { createAppointment };
