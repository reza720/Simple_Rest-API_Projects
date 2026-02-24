// Load environment variables from .env
const dotenv = require("dotenv");
dotenv.config();

// Import necessary Node.js modules
const path = require("path");
const fs = require("fs");
const winston = require("winston");

// Ensure the logs directory exists, create it if it doesn't
const logs = path.join(process.cwd(), "logs");
fs.mkdirSync(logs, { recursive: true });

// Define the log format for structured logging
const logFormat = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
);

// Create the Winston logger instance
const logger = winston.createLogger({
    level: process.env.LEVEL_LOGGER || "info",
    format: logFormat,
    transports: [
        // Log to console with colorized and simple format
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),

        // Log all messages to a combined log file
        new winston.transports.File({
            filename: path.join(logs, "allLogs.log"),
            level: process.env.LEVEL_LOGGER || "info"
        }),

        // Log only errors to a separate error log file
        new winston.transports.File({
            filename: path.join(logs, "errorsLog.log"),
            level: "error"
        })
    ]
});

// Export the logger for use in other modules
module.exports = logger;