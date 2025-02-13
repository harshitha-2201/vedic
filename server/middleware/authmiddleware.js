// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
<<<<<<< HEAD
=======
  console.log('Authorization Header:', authHeader); // Log header for debugging

>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

<<<<<<< HEAD
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded user ID:', decoded.id); // Debugging
    req.user = { id: decoded.clientId }
    next();
  } catch (err) {
    console.error('Token verification error:', err); // Debugging
=======
  const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
  console.log('Extracted Token:', token); // Log the extracted token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
        // Check if the user is an admin
        if (decoded.role !== 'admin') {
          return res.status(403).json({ message: 'Access denied: Admin credentials required' });
        }
        
    next();
  } catch (err) {
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
    res.status(401).json({ message: 'Token is not valid' });
  }
};

<<<<<<< HEAD

=======
>>>>>>> 08b6abac590849964e465072a837d9cd92611df6
module.exports = auth;

