const path = require("path");
const fs = require("fs");
const winston = require("winston");

// project root
const rootDir = path.resolve(__dirname, "../../");

// logs directory
const logsDir = path.join(rootDir, "logs");

// create logs directory
fs.mkdirSync(logsDir, { recursive: true });

const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),

  transports: [

    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),

    new winston.transports.File({
      filename: path.join(logsDir, "allLogs.log"),
      level: "info"
    }),

    new winston.transports.File({
      filename: path.join(logsDir, "errorsLog.log"),
      level: "error"
    })

  ]
});

module.exports = logger;