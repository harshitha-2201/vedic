// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded user ID:', decoded.id); // Debugging
    req.user = { id: decoded.clientId }
    next();
  } catch (err) {
    console.error('Token verification error:', err); // Debugging
    res.status(401).json({ message: 'Token is not valid' });
  }
};


module.exports = auth;

