const express = require('express');
const router = express.Router();
const { createAppointment,  } = require('../controllers/appointmentController');
const auth = require('../middleware/authMiddleware.js');

// Route for creating a new appointment
router.post('/appointment', auth, createAppointment);


module.exports = router;
