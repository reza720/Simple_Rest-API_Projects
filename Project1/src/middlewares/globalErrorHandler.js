const logger = require("../config/winston");

const globalErrorHandler=(err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const errors = err.errors || [];

    // Log full error details
    logger.error({
        type: "ERROR",
        message: err.message,
        statusCode,
        stack: err.stack,
        method: req.method,
        url: req.originalUrl,
        errors,
    });

    // Respond to client
    res.status(statusCode).json({
        success: false,
        message,
        errors, 
    });
}

module.exports = globalErrorHandler;