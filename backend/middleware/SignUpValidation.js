const {body , ValidationResult} = require('express-validator');

exports.SignUpValidation=[
    body('email','please a valise Email').isEmail()
    //body ('password','please provide a valide password').isLength({min:8})

]

exports.SignInValidation=[
    body('email','please provide a valide Email').isEmail()
]

exports.Validation = (req,res ,next)=>{
    const errors = ValidationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }
    next()
}