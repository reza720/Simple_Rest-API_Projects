const {validationResult}=require("express-validator");

const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error("Validation Failed");
        err.statusCode = 400;
        err.data = errors.array(); 
        return next(err);
    }
    next();
};

module.exports = errorHandler;