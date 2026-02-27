const {User}=require("../models");
const logger=require("../config/winston");
const notFoundError=require("../utils/notFoundError");

class UserService{
    // Read Users, Only Admin use it
    async getUsers(options={}){
        const users=await User.findAll({where:options,attributes:{exclude:["password"]}});
        if(users.length===0){
            logger.warn(`No users found with filters of ${JSON.stringify(options)}`);
            notFoundError("users");
        }
        return users;
    }

    // Update User, Both Admin and Customer user it, but for onyl themselves
    async updateUser(id,data){
        const user=await User.findByPk(id);
        if(!user)notFoundError("user");
        await user.update(data);
        logger.info(`User with ID: ${id} Updated`);
        return user;
    }

    // Delete User, Both Admin and Customer user it, admin can use for both self and customers
    async deleteUser(id){
        const user=await User.findByPk(id);
        if(!user)notFoundError("user");
        await user.destroy();
        logger.info(`User with ID: ${id} Deleted`);
        return {message:"Deleted"};
    }
};

module.exports=new UserService();