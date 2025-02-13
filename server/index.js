// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const appointmentsRoute = require('./routes/appointmentRoute');
const adminRoute = require('./routes/adminRoute');


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentsRoute);
app.use('/api/admin', adminRoute);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
