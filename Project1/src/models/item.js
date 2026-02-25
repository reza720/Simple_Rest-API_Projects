const sequelize=require("../config/sequelize");
const {DataTypes}=require("sequelize");

const Item=sequelize.define("Item",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    price:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Item;