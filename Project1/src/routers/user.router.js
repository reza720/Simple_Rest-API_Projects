const express=require("express");
const {AuthController, UserController}=require("../controllers");
const {UserValidation}=require("../middlewares/validations");
const authenticateToken=require("../middlewares/authenticateToken");
const authorizeRoles=require("../middlewares/authorizeRoles");
const rateLimit=require("express-rate-limit");

const router=express.Router();

// Limiter functions
const loginLimiter=rateLimit({
    windowMs:15 * 60 * 1000,
    max: 5,
    message: "Too many login attempts, Try again latter",
    statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false
});

const signupLimiter=rateLimit({
    windowMs:15 * 60 * 1000,
    max: 10,
    message: "Too many signup attemps, Try again latter",
    statusCode: 429,
    standardHeaders:true,
    legacyHeaders: false
});

// Endpoints
router.post(
    "/auth/signup", 
    signupLimiter,
    UserValidation.signupRules,
    UserValidation.errorHandler, 
    AuthController.signup
);
router.post(
    "/auth/login",
    loginLimiter,
    UserValidation.loginRules,
    UserValidation.errorHandler, 
    AuthController.login
);
router.get(
    "/",
    authenticateToken, 
    authorizeRoles("Admin"), 
    UserController.getUsers
);
router.put("/me", 
    authenticateToken, 
    UserController.updateUser
);
router.delete(
    "/me", 
    authenticateToken, 
    UserController.deleteUser
);

module.exports=router;
