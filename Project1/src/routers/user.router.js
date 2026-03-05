const {AuthController, UserController}=require("../controllers");
const {UserValidation}=require("../middlewares/validations");
const authenticateToken=require("../middlewares/authenticateToken");
const authorizeRoles=require("../middlewares/authorizeRoles");

const express=require("express");
const router=express.Router();

router.post("/auth/signup", UserValidation.signupRules,UserValidation.errorHandler, AuthController.signup);
router.post("/auth/login",UserValidation.loginRules, UserValidation.errorHandler, AuthController.login);
router.get("/", authenticateToken, authorizeRoles("Admin"), UserController.getUsers);
router.put("/me", authenticateToken, UserController.updateUser);
router.delete("/me", authenticateToken, UserController.deleteUser);

module.exports=router;
