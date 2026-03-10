const winston=require("winston");
const fs=require("fs");
const path=require("path");

const rootDir=path.resolve(__dirname, "../../");
const logs=path.join(rootDir,"logs");
fs.mkdirSync(logs,{recursive:true});

const logger=winston.createLogger({
  level: "info",
  format:winston.format.combine(
    winston.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
    winston.format.errors({stack:true}),
    winston.format.splat(),
    winston.format.json()
  ),
  transports:[
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),

    new winston.transports.File({
      filename:path.join(logs,"allLogs.log")
    }),

    new winston.transports.File({
      filename:path.join(logs,"errors.log"),
      level:"error"
    })
  ]
});

module.exports=logger;