const argon=require("argon2");
const jwt=require("jsonwebtoken");
const {User}=require("../models");
const logger=require("../config/logger");
const notFoundError=require("../utils/notFoundError");

class AuthService{
    // Sign up Method
    async signup({email,fullName,phone,password,role}){
        // Check User existence
        const existingUser=await User.findOne({where:{email}});
        if(existingUser){
            const err=new Error("User Already Exist");
            err.statusCode=400;
            throw err;
        }
        // Sign up and return User with Hashed Password
        const hashed=await argon.hash(password);
        const user=await User.create({
            email,
            fullName,
            phone,
            password:hashed,
            role
        });
        logger.info(`User with Email ${email} and Name ${fullName} signed up`);
        return {
            email:user.email, 
            fullName:user.fullName
        };
    }

    // Log In
    async login({email,password}){
        // Find User
        const user=await User.findOne({where:{email}});
        if(!user) notFoundError(`User with email ${email}`);

        // Verify the Password
        const isMatch=await argon.verify(user.password, password);
        if(!isMatch){
            const err=new Error("Invalid Password");
            err.statusCode=401;
            throw err;
        }

        // Assign Token
        const token=jwt.sign(
            {email:user.email, fullName:user.fullName},
            "tokenKey",
            {expiresIn:"1h"}

        );
        logger.info(`User with Email ${email} Logged In`);
        return token;
    }
}

module.exports=new AuthService();

