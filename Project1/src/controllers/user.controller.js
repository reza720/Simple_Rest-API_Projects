const {UserService}=require("../services");

class UserController{
    // Read User
    static async getUsers(req,res,next){
        try{
            const users=await UserService.getUsers();
            res.status(200).json({success:true, data:users});
        }
        catch(err){
            next(err);
        }
    }

    // Update User
    static async updateUser(req,res,next){
        try{
            const user=await UserService.updateUser(req.params.id,req.body);
            res.status(200).json({success:true, data:user});
        }
        catch(err){
            next(err);
        }
    }

    // Delete User
    static async deleteUser(req,res,next){
        try{
            await UserService.deleteUser(req.params.id);
            res.status(204).send();
        }
        catch(err){
            next(err);
        }
    }
}

module.exports=UserController;