const {body}=require("express-validator");
const errorHandler=require("../../utils/validationErrorHandler");

const UserValidation = {
  signupRules: [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().isLength({ min: 6 }),
  ],
  loginRules: [
    body("email").notEmpty().isEmail(),
    body("password").notEmpty(),
  ],
  errorHandler
};
module.exports=UserValidation;