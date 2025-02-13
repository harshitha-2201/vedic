const express = require('express');
const router = express.Router();
const { getAppointments, updateAppointmentStatus, updateClientProfile } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');


// Route for fetching appointments
router.get('/getappointments', auth, getAppointments);

// Route for updating appointment status (accept/decline)
router.post('/appoint/update-status', auth, updateAppointmentStatus);


module.exports = router;