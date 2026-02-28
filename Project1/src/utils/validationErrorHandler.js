const {validationResult}=require("express-validator"); 

function errorHandler(req,res,next){
    const errors=validationResult(req);
    
    if(!errors.isEmpty()){
        const err=new Error("Validation Failed");
        err.statusCode=400;
        return next(err);
    }
    return next();
}

module.exports=errorHandler;

