const express = require("express");
const app = require("./app");
const database = require("../src/config/sequelize");

(async () => {
  try {
    // Connect to database
    await database.authenticate();
    await database.sync();
    console.log("Database connected");

    // Start server
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1); 
  }
})();