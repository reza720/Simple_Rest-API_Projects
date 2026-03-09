const {Property}=require("../models");
const logger=require("../config/logger");
const notFoundError=require("../utils/notFoundError");

class PropertyService{
    // Create Property
    async createProperty(data){
        const property=await Property.create(data);
        logger.info(`Property with ID ${property.id} Created`);
        return property;
    }
    
    // Read Property
    async getProperties(options={}){
        const properties=await Property.findAll({where:options});
        if(properties.length===0) notFoundError("properties");
        return properties;
    }

    // Update Property
    async updateProperty(id,data){
        const property=await Property.findByPk(id);
        if(!property) notFoundError("property");
        await property.update(data);
        logger.info(`Property with ID ${id} Updated`);
        return property;
    }

    // Delete Property
    async deleteProperty(id){
        const property=await Property.findByPk(id);
        if(!property) notFoundError("property");
        await property.destroy();
        logger.info(`Property with ID ${id} Deleted`);
        return {message: "Deleted"};
    }
}

module.exports= new PropertyService();