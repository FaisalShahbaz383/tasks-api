const { body, validationResult } = require('express-validator');

// Helper to catch and format validation errors
const handleErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({ field: err.path, message: err.msg }))
    });
  }
  next();
};

// Validation rules
exports.validateRegister = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email address').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  handleErrors
];

exports.validateLogin = [
  body('email').isEmail().withMessage('Please provide a valid email address').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
  handleErrors
];

exports.validateTask = [
  body('title').trim().notEmpty().withMessage('Task title is required'),
  body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Status must be pending, in-progress, or completed'),
  handleErrors
];