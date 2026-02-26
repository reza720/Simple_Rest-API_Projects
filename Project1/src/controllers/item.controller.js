const {ItemService}=require("../services");

class ItemController{
    // Create Item
    static async createItem(req,res,next){
        try{
            const item=await ItemService.createItem(req.body);
            res.status(201).json({success:true, data:item});
        }
        catch(err){
            next(err);
        }
    }

    // Read Items
    static async getItems(req,res,next){
        try{
            const items=await ItemService.getItems();
            res.status(200).json({success:true, data:items});
        }
        catch(err){
            next(err);
        }
    }

    // update Item
    static async updateItem(req,res,next){
        try{
            const item=await ItemService.updateItem(req.params.id, req.body);
            res.status(200).json({success:true, data:item});
        }
        catch(err){
            next(err);
        }
    }

    // Delete Item
    static async deleteItem(req,res,next){
        try{
            await ItemService.deleteItem(req.params.id);
            res.status(204).send();
        }
        catch(err){
            next(err);
        }
    }
}

module.exports=ItemService;