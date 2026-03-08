const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "Project2",
    "root",
    "root",{
        host:"localhost",
        dialect:"mysql",
        logging:false
    }
);

module.exports=sequelize;