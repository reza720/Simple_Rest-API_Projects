const {body}=require("express-validator");

const signupRules=[
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Valid email is required"),
    body("fullName")
        .trim()
        .notEmpty().withMessage("Name is required")
        .matches(/^[a-zA-Z ]+$/).withMessage("Name can only contain letters and spaces"),
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 5, max: 100 }).withMessage("Password must be between 5 and 100 characters")
];

const loginRules=[
    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Valid email is required"),
    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 5, max: 100 }).withMessage("Password must be between 5 and 100 characters")
];

module.exports={signupRules,loginRules};