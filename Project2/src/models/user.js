const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const User=sequelize.define("User",{
    email: {type:DataTypes.STRING, primaryKey:true},
    fullName: {type:DataTypes.STRING, allowNull:false},
    phone: {type:DataTypes.STRING, allowNull:true},
    password:{type:DataTypes.STRING, allowNull:false},
    role: {type:DataTypes.ENUM('Admin','User'), allowNull:false, defaultValue:'User'}
},{
    timestamps:true
});

module.exports=User;
