const express=require("express");
const router=express.Router();

const {PropertyHandler}=require("../handlers");
const validate=require("../utils/validate");
const PropertyRules=require("../middlewares/validations/property.validation");
const AuthenticateToken=require("../middlewares/authenticateToken");

router.post(
    "/", 
    AuthenticateToken,
    PropertyRules,
    validate,
    PropertyHandler.createProperty
);

router.get(
    "/",
    AuthenticateToken,
    PropertyHandler.getProperties
);

router.put(
    "/:id",
    AuthenticateToken,
    PropertyRules,
    validate,
    PropertyHandler.updateProperty
);

router.delete(
    "/:id",
    AuthenticateToken,
    PropertyHandler.deleteProperty
);

module.exports=router;


