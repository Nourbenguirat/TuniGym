// ProgramValidation.js
const { check, validationResult } = require('express-validator');

const ProgramValidation = [
    check('name').notEmpty().withMessage('Program name is required'),
    check('description').notEmpty().withMessage('Program description is required'),
    check('duration').isInt({ min: 1 }).withMessage('Program duration must be a positive integer'),
    check('difficulty').isIn(['Beginner', 'Intermediate', 'Advanced']).withMessage('Invalid difficulty level'),
    check('exercises').isArray().withMessage('Exercises should be an array'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { ProgramValidation };
