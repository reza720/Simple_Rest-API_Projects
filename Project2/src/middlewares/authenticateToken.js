const jwt=require("jsonwebtoken");
const logger=require("../config/logger");

const AuthenticateToken=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;

        if(!authHeader){
            const err=new Error("No token provided");
            err.statusCode=401;
            return next(err);
        }

        if(!authHeader.startsWith("Bearer ")){
            const err=new Error("Invalid Token");
            err.statusCode=401;
            return next(err);
        }

        const token= authHeader.split(" ")[1];
        const decode=jwt.verify(token, "tokenKey");
        req.user=decode;
        next();
    }
    catch(err){
        if(err.name === "TokenExpiredError") {
            err.statusCode = 401;
            err.message = "Token Expired";
        } else if(err.name === "JsonWebTokenError") {
            err.statusCode = 401;
            err.message = "Invalid Token";
        }
        next(err);  
    }
};

module.exports=AuthenticateToken;