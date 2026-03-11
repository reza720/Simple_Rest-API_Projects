const express=require("express");
const database=require("./config/database");
const logger=require("./config/logger");
const app=require("./app");

(async()=>{
    try{
        await database.authenticate();
        await database.sync();
        logger.info("Database Connected");

        app.listen(3000, ()=>{
            logger.info("App is Running on Ports 3000");
        });
    }
    catch(err){
        logger.error("Startup Error: ", err);
        process.exit(1);
    }
})();