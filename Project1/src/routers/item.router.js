const {ItemController}=require("../controllers");
const {ItemValidation}=require("../middlewares/validations");
const AuthenticateToken=require("../middlewares/authenticateToken");
const authorizeRoles=require("../middlewares/authorizeRoles");

const express=require("express");
const router=express.Router();

router.post(
    "/",
    AuthenticateToken,
    authorizeRoles("Admin"),
    ItemValidation.rules, 
    ItemValidation.errorHandler, 
    ItemController.createItem
);
router.get(
    "/",
    ItemController.getItems
);
router.put(
    "/:id",
    AuthenticateToken, 
    authorizeRoles("Admin"), 
    ItemValidation.rules, 
    ItemValidation.errorHandler, 
    ItemController.updateItem
);
router.delete(
    "/:id", 
    AuthenticateToken, 
    authorizeRoles("Admin"), 
    ItemController.deleteItem
);

module.exports=router;