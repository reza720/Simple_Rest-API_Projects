const {AuthService}=require("../services");

class AuthController{
    // Sign Up
    static async signup(req,res,next){
        try{
            const user=await AuthService.signup(req.body);
            res.status(201).json({success:true, message: "User signed up successfully", data:{
                id: user.id,
                name:user.name,
                email:user.email,
                role:user.role
            }});
        }
        catch(err){
            next(err);
        }
    }
    
    // Log In
    static async login(req,res,next){
        try{
            const result=await AuthService.login(req.body);
            res.status(200).json({success:true, message:"User Loged in successfully",data:result});
        }
        catch(err){
            next(err);
        }
    }
}

module.exports=AuthController;