const {AuthService}=require("../services");

class AuthHandler{
    static async signup(req,res,next){
        try{
            const user=await AuthService.signup(req.body);
            res.status(201).json({success:true, message:"Signed Up",data:{
                email:user.email,
                fullName:user.fullName
            }});
        }
        catch(err){
            next(err);
        }
    }

    static async login(req,res,next){
        try{
            const result= await AuthService.login(req.body);
            res.status(200).json({success:true, message:"Logged In", data:result});
        }
        catch(err){
            next(err);
        }
    }
}

module.exports=AuthHandler;