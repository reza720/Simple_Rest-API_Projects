const {User}=require("../models");
const logger=require("../config/logger");
const notFoundError=require("../utils/notFoundError");

class UserService{
    // Read Users
    async getUsers(options={}){
        const users=await User.findAll({where:options});
        if(users.length===0)notFoundError("Users");
        return users;
    }

    // Update User
    async updateUser(email,data){
        const user=await User.findByPk(email);
        if(!user) notFoundError("User");
        await user.update(data);
        logger.info(`User with emial ${email} Updated`);
        return user;
    }

    // Delete User
    async deleteUser(email){
        const user=await User.findByPk(email);
        if(!user) notFoundError("User");
        await user.destroy();
        logger.info(`User with email ${email} Deleted`);
        return {message: "Deleted"};
    }
}

module.exports=new UserService();