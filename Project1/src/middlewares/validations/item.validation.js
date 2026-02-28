const {body}=require("express-validator");
const errorHandler=require("../../utils/validationErrorHandler");

const itemValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("Name is required"),
        body("price")
            .trim()
            .isFloat({min:0}).withMessage("Price can not be negative")
            .toFloat()
    ],
    errorHandler
};

module.exports=itemValidation;