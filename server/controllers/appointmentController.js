const Appointment = require('../models/Appointment');

// Controller function to create a new appointment
const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, date } = req.body;
    const userId = req.user.id;

    const newAppointment = new Appointment({
      userId,
      name,
      email,
      phone,
      date,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createAppointment };
