const express=require("express");
const router=express.Router();

const UserRouter=require("./user.router");
const PropertyRouter=require("./property.router");

router.use("/users",UserRouter);
router.use("/properties",PropertyRouter);

module.exports=router;

