// Load environment variables from .env
const dotenv = require("dotenv");
dotenv.config();

// Import the Sequelize library
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance (database connection)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false // Disable SQL query logging
    }
);

// Export the Sequelize instance for use in other modules
module.exports = sequelize;