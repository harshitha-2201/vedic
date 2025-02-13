// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const appointmentsRoute = require('./routes/appointmentRoute');
<<<<<<< HEAD
const adminRoute = require('./routes/adminRoute');

=======
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

<<<<<<< HEAD
app.use(cors({
  origin: 'http://localhost:3000'
}));
=======
// CORS
// app.use(cors({
//   origin: process.env.FRONTEND_URL ,
//   credentials: true,
// }));
app.use(cors());


>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentsRoute);
<<<<<<< HEAD
app.use('/api/admin', adminRoute);


const PORT = process.env.PORT || 4000;
=======

// Server Listener
const PORT = process.env.PORT || 3001;
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
