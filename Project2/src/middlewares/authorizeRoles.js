const authorizeRoles=(...roles)=>{
    return (req,res,next)=>{
        
        if(!req.user){
            const err=new Error("No User Data Found");
            err.statusCode=401;
            return next(err);    
        }

        if(!roles.includes(req.user.role)){
            const err= new Error("Your are not allowed to access this route");
            err.statusCode=403;
            return next(err);
        }

        next();
    }
};

module.exports=authorizeRoles;