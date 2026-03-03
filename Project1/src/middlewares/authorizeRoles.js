const authorizeRoles=(...roles)=>{
    return (req,res,next)=>{
        if(!req.user){
            const err=new Error("Unauthorized: No user Data");
            err.statusCode=401;
            return next(err);
        }

        if(!roles.includes(req.user.role)){
            const err=new Error("Forbidden: your are not allowed to access this resource");
            err.statusCode=403;
            return next(err);
        }

        next();
    }
};

module.exports=authorizeRoles;