const dotenv=require("dotenv");
dotenv.config();

const jwt=require("jsonwebtoken");
const logger=require("../config/winston");

const AuthenticateToken=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;

        if(!authHeader){
            const err=new Error("Access Denied, No Token Provided");
            err.statusCode=401;
            return next(err);
        }

        if(!authHeader.startsWith("Bearer ")){
            const err= new Error("Invalid Token, Use Bearer Token");
            err.statusCode=401;
            return next(err);
        }

        const token=authHeader.split(" ")[1];

        const decode=jwt.verify(token, process.env.JWT_SECRET || "secretKey");
        req.user=decode;
        next();
    }
    catch(err){
        if(err.name==="TokenExpiredError"){
            err.statusCode=401;
            err.message="Token Expired";
        }

        if(err.name==="JsonWebTokenError"){
            err.statusCode=401;
            err.message="Invalid Token";
        }
        
        next(err);
    }
}

module.exports=AuthenticateToken;