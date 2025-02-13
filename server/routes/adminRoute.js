const express = require('express');
const router = express.Router();
const { getAppointments, updateAppointmentStatus, updateClientProfile } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');


// Route for fetching appointments
router.get('/getappointments', authMiddleware, getAppointments);

// Route for updating appointment status (accept/decline)
router.post('/appoint/update-status', authMiddleware, updateAppointmentStatus);


module.exports = router;