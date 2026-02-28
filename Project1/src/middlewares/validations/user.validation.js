const {body}=require("express-validator");
const errorHandler=require("../../utils/validationErrorHandler");

const UserValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("Name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("Name only have letters and space"),
        body("email")
            .trim()
            .notEmpty().withMessage("email is required")
            .isEmail().withMessage("valid email required"),
        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
            .length({min:5,max:10}).withMessage("Password must be between 5 and 10 characters")
    ],
    errorHandler
};

module.exports=UserValidation;