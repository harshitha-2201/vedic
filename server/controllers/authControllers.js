// controllers/authController.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

<<<<<<< HEAD
=======
    // Check if all fields are provided
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({ name, email, password: hashedPassword, phone });
    await user.save();

    // Generate JWT
<<<<<<< HEAD
    const token = jwt.sign({ clientId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
=======
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6

    res.status(201).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

<<<<<<< HEAD

=======
    // Check if all fields are provided
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user is admin and validate admin credentials
    if (email === 'admin22@email.com' && password === 'Admin@22') {
<<<<<<< HEAD
      const token = jwt.sign({ id: 'admin', role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Admin login successful', token });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT

    const payload = {
      clientId: user._id,
      role: user.role,  // Assuming role is stored in the User model
    };

    
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
=======
      const token = jwt.sign({ userId: 'admin', role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Admin login successful', token });
    }

    // Check if it's a regular user login
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT for user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'User login successful', token, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
