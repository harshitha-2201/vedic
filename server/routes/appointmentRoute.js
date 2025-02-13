const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { createAppointment,  } = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');
=======
const { createAppointment ,  getAppointments, updateAppointmentStatus} = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authmiddleware');
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

// Route for creating a new appointment
router.post('/appointment', authMiddleware, createAppointment);

<<<<<<< HEAD
=======
// Fetch all appointments (protected route)
router.get('/list-appointments', authMiddleware, getAppointments);

// Update appointment status (protected route)
router.put('/list-appointments/update-status', authMiddleware, updateAppointmentStatus);


>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

module.exports = router;
