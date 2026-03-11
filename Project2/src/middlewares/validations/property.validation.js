const { body } = require("express-validator");

const PropertyRules = [
    body("name")
        .trim()
        .notEmpty().withMessage("Name is required"),
    body("price")
        .notEmpty().withMessage("Price is required")
        .isFloat({ min: 0 }).withMessage("Price should be a positive number")
];

module.exports = PropertyRules; 