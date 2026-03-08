const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const User=sequelize.define("User",{
    email: {type:DataTypes.STRING, primaryKey:true, allowNull:false},
    fullName: {type:DataTypes.STRING, allowNull:false},
    phone: {type:DataTypes.STRING, allowNull:true},
    role: {type:DataTypes.ENUM('Admin','User'), allowNull:false, defaultValue:'User'}
},{
    timestamps:true
});

module.exports=User;
