const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Patient=sequelize.define("Patient",{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    firstName:{type:DataTypes.STRING, allowNull:false},
    lastName:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:true},
},{
    timestamps:true
});

module.exports=Patient;
