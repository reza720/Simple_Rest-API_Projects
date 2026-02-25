const {Item}=require("../models");
const logger=require("../config/winston");
const notFoundError=require("../utils/notFoundError");
const { log } = require("winston");

class ItemService{
    // Create Item
    async createItem(data){
        return Item.create(data);
    }

    // Read Items, Only Supports exact matches
    async getItems(options={}){
        const items=await Item.findAll({where:options});
        if(items.length===0){
            logger.info("No Item Found");
            notFoundError('items');
        }
        return items;
    }

    // Update Item
    async updateItem(id,data){
        const item=await Item.findByPk(id);
        if(!item){
            logger.info(`Item with Id ${id} not found`);
            notFoundError("item");
        }
        await item.update(data);
        return item;
    }

    // Delete Item
    async deleteItem(id){
        const item=await Item.findByPk(id);
        if(!item){
            logger.info(`Item with Id ${id} does not exist`);
            notFoundError("item");
        }
        return {message:"Deleted"};
    }
};

module.exports=new ItemService();