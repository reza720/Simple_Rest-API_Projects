const globalErrorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message= err.message || "Server Internal Error";
    const errors=err.errors || [];

    // Errors Logs
    logger.error({
        name: err.name,
        message: err.message,
        statusCode,
        stack: err.stack,
        method: req.method,
        url: req.originalUrl,
        errors
    });

    // Respond to Client
    res.status(statusCode).json({success:false, message: message, errors:errors});
};

module.exports=globalErrorHandler;

