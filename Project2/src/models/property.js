const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");
const User=require("./user");

const Property=sequelize.define("Property",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.TEXT},
    owner:{type:DataTypes.STRING, allowNull:false, references:{model:User, key:"email"}},
    price:{type:DataTypes.DECIMAL(10,2), allowNull:false}
},{
    timestamps:true
});

module.exports=Property;