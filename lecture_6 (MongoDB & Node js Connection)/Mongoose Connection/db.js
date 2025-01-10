// This will be the file for the connection of node js with mongodb database with the help of mongoose library.

// Import necessary modules
require('dotenv').config(); // Load environment variables from a .env file for security
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction

// Define the MongoDB connection URL
// Use environment variables to securely handle database URLs
const connectUrl = process.env.Local_Db_Url; // Local database URL
// const connectUrl = process.env.Online_DB_Url; // changed the local ('mongodb://localhost:27017/mydatabase') database it with mongodb atlas host link Uncomment to use the MongoDB Atlas connection string

// Replace the placeholder URL with your actual MongoDB URL
// Example for local: 'mongodb://localhost:27017/mydatabase'
// Example for MongoDB Atlas: 'mongodb+srv://username:password@cluster.mongodb.net/mydatabase'

// Connect to MongoDB using Mongoose
mongoose.connect(connectUrl, {
  useNewUrlParser: true,    // Ensures compatibility with the MongoDB connection string
  useUnifiedTopology: true, // Enables the new Server Discover and Monitoring engine
});

// Access the connection object
const db = mongoose.connection;

// Define event listeners for the connection object
// Triggered when there's an error connecting to MongoDB
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Triggered when the connection to MongoDB is successful
db.on('connected', () => {
  console.log('\nSuccessfully connected to MongoDB 🎉');
});

// Triggered when the MongoDB connection is disconnected
db.on('disconnected', () => {
  console.log('\nMongoDB connection disconnected ❌');
});

// Export the database connection for use in other parts of the application
module.exports = db;

/*
Instructions:
1. Add your MongoDB connection string to the `.env` file:
   - For local database: Local_Db_Url=mongodb://localhost:27017/yourdatabase
   - For MongoDB Atlas: Online_DB_Url=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourdatabase
2. Uncomment the appropriate `connectUrl` depending on your environment.
3. This file handles connection events, so ensure it's imported before using any MongoDB operations in your app (here which is index .js file).
*/