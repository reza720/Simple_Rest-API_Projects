const dotenv=require("dotenv");
dotenv.config();

const bcrypt=require("bcrypt");
const {User}=require("../models");
const jwt=require("jsonwebtoken");
const logger=require("../config/winston");
const notFoundError=require("../utils/notFoundError");

class AuthService{
    // Sign Up, Create user but hash the password
    async signup({name,email,password,role}){
        const hashedPassword=await bcrypt.hash(password, 10);
        const user=await User.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        logger.info(`User with name ${name} and email ${email} signed up`);
        return user;
    }
    // Log In
    async login({email,password}){
        // Find the user
        const user=await User.findOne({where:{email}});
        if(!user){
            logger.warn(`Login failed: User with email ${email} does not exist`);
            notFoundError(`User with email ${email}`);
        }

        // If use exist, check if the password is correct for the user
        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            logger.warn(`Login failed for ${email}: Invalid password`);
            const err=new Error(`Invalid password`);
            err.statusCode=401;
            throw err;
        }

        // if the user is found and password is correct, user can have a token to use for each request
        const token=jwt.sign(
            {id:user.id, name:user.name, email:user.email, role:user.role},
            process.env.JWT_SECRET || "secretKey",
            {expiresIn:"1h"}
        );
        logger.info(`User with email ${email} successfully logged in`);
        return {token, user:{id:user.id, name:user.name, role:user.role}};
    }
}
module.exports=new AuthService();

