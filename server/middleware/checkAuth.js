const {body, validationResult} = require("express-validator");


const userValidationRules = () => {
    console.log("happy");
    return [
        body("email").isEmail().withMessage("Please enter a valid email"),
        body("password").isLength({min: 6}).withMessage("Please enter password 6 or more character")
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    else {
        return next();
    }
};

module.exports = {userValidationRules, validate};