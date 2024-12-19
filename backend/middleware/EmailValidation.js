const { body, validationResult } = require('express-validator');

const validateEmail = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  // other validations...
];

const validateUser = [
  ...validateEmail,
  // other field validations like name, age, etc.
];

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateUser, handleValidation };
