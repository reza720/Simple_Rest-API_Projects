const {Item}=require("../models");
const logger=require("../config/winston");
const notFoundError=require("../utils/notFoundError");

class ItemService{
    // Create Item
    async createItem(data){
        const item=await Item.create(data);
        logger.info(`Item cretaed with id ${item.id}`);
        return item;
    }

    // Read Items, Only Supports exact matches
    async getItems(options={}){
        const items=await Item.findAll({where:options});
        if(items.length===0) notFoundError('items');
        return items;
    }

    // Update Item
    async updateItem(id,data){
        const item=await Item.findByPk(id);
        if(!item) notFoundError("item");
        await item.update(data);
        logger.info(`Item with Id ${id} updated`);
        return item;
    }

    // Delete Item
    async deleteItem(id){
        const item=await Item.findByPk(id);
        if(!item) notFoundError("item");
        await item.destroy();
        logger.info(`Item with id ${id} deleted`);
        return {message:"Deleted"};
    }
};

module.exports=new ItemService();