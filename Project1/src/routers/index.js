const ItemRouter=require("./item.router");
const UserRouter=require("./user.router");

const express=require("express");
const router=express.Router();

router.use("/users",UserRouter);
router.use("/items",ItemRouter);

module.exports=router;
