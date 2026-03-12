const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Staff=sequelize.define("Staff",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    firstName:{type:DataTypes.STRING, allowNull:false},
    lastName:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique:true},
    phone:{type:DataTypes.STRING, allowNull:true},
    hireDate:{type:DataTypes.DATEONLY, allowNull:false, defaultValue: DataTypes.NOW},
    role:{type:DataTypes.ENUM('Admin','Doctor'), defaultValue:'Doctor', allowNull:false}
},{
    timestamps:true
});

module.exports=Staff;