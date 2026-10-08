const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization') || req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Access Denied. No token provided.' });
  }

  const token = authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7).trim() 
    : authHeader.trim();

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access Denied. Token is empty.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    // PRINT EXACT ERROR TO TERMINAL
    console.error('JWT Verification Error:', ex.message);
    return res.status(400).json({ success: false, message: 'Invalid token.' });
  }
};