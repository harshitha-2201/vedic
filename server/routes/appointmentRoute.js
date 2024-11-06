const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authmiddleware');

// Route for creating a new appointment
router.post('/appointment', authMiddleware, createAppointment);

module.exports = router;
