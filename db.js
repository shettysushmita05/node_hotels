const mongoose = require('mongoose');

require("dotenv").config();


const mongoURL=process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    //ssl: true, // Use SSL
    // sslValidate: true // Disable SSL validation (optional, not recommended for production)
});

const db = mongoose.connection;

// Define event listeners for database
db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log("MongoDB connection disconnected");
});

// Export the database connection
module.exports = db;
