const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const { AuthHandler, UserHandler } = require("../handlers");
const validate = require("../utils/validate");
const { SignupRules, LoginRules } = require("../middlewares/validations/user.validation");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeRoles = require("../middlewares/authorizeRoles");

const signupLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 30,
    message: "Try again in 5 minutes"
});

const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10,
    message: "Try again in 5 minutes"
});

router.post(
    "/auth/signup",
    signupLimiter,
    SignupRules,
    validate,
    AuthHandler.signup
);

router.post(
    "/auth/login",
    loginLimiter,
    LoginRules,
    validate,
    AuthHandler.login
);

router.get(
    "/",
    authenticateToken,
    authorizeRoles("Admin"),
    UserHandler.getUsers
);

router.put(
    "/me",
    authenticateToken,
    SignupRules,
    validate,
    UserHandler.updateUser
);

router.delete(
    "/me",
    authenticateToken,
    UserHandler.deleteUser
);

module.exports = router;