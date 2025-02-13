<<<<<<< HEAD
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
=======
const Appointment = require('../models/Appointment');
const nodemailer = require('nodemailer');



// Controller function to create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone, date } = req.body;
    const userId = req.user.userId;

    const newAppointment = new Appointment({
      userId,
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
      name,
      email,
      phone,
      date,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
<<<<<<< HEAD
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
=======
    res.status(500).json({ message: 'Server error' });
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
  }
};


<<<<<<< HEAD
module.exports = { createAppointment };
=======
// Fetch all appointments for a doctor
exports.getAppointments = async (req, res) => {
  try {
    // Since you have only one doctor, there's no need to filter by doctorId
    const appointments = await Appointment.find();  // Get all appointments
    res.status(200).json(appointments);
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ message: 'Error fetching appointments' });
  }
};


// Accept or Decline an appointment
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    if (!appointmentId || !status) {
      return res.status(400).json({ message: 'Invalid request: missing appointmentId or status' });
    }
    
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.status = status;
    await appointment.save();

    // Send email notification
    await sendEmailNotification(appointment.email, status);

    res.status(200).json({ message: 'Appointment status updated successfully' });
  } catch (err) {
    console.error("Error updating appointment:", err);
    res.status(500).json({ message: 'Error updating appointment', error: err.message });
  }
};


// Function to send email notifications
const sendEmailNotification = async (email, status) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const subject = status === 'Accepted' 
    ? 'Your Appointment has been Accepted' 
    : 'Your Appointment has been Declined';
  
  const text = status === 'Accepted'
    ? 'Your appointment has been accepted. Please be on time.'
    : 'Sorry, the doctor is unavailable for this date. Please book another appointment.';
  
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  });
};
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
