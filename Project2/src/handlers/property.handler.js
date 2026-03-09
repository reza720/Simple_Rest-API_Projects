const {PropertyService}=require("../services");

class PropertyHandler{
    static async createProperty(req,res,next){
        try{
            const property=await PropertyService.createProperty(req.body);
            res.status(201).json({success:true, message:"Property Created", data:property});
        }
        catch(err){
            next(err);
        }
    }

    static async getProperties(req,res,next){
        try{
            const properties=await PropertyService.getProperties();
            res.status(200).json({success:true, data:properties});
        }
        catch(err){
            next(err);
        }
    }

    static async updateProperty(req,res,next){
        try{
            const property=await PropertyService.updateProperty(req.params.id, req.body);
            res.status(200).json({success:true, message:"Updated", data:property});
        }
        catch(err){
            next(err);
        }
    }

    static async deleteProperty(req,res,next){
        try{
            await PropertyService.deleteProperty(req.params.id);
            res.status(204).send();
        }
        catch(err){
            next(err);
        }
    }
}

module.exports=PropertyHandler;