// Import the Sequelize library
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance (database connection)
const sequelize = new Sequelize(
    'project1',
    'root',
    'root',
    {
        host: "localhost",
        dialect: "mysql",
        logging: false // Disable SQL query logging
    }
);

// Export the Sequelize instance for use in other modules
module.exports = sequelize;