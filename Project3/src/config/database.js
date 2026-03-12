const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "Project3",
    "root",
    "root",
    {
        host:"localhost",
        dialect:"mysql",
        logging:false
    }
);

module.exports=sequelize;