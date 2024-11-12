// this will be the file for the connection of node js with mongoose.

require('dotenv').config(); // .env file added for keeping you API password security

const mongoose = require('mongoose');


//define the MongoDB connection URL
var connectUrl  = process.env.Local_Db_Url; // local database URL of your computer
// var connectUrl = process.env.Online_DB_Url // changed the local ('mongodb://localhost:27017/mydatabase') database it with mongodb atlas host link
mongoose.connect(connectUrl, {   
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Replace 'mongodb://localhost:27017/mydatabase' with your actual MongoDB Hosting  URL you want to get create if it is not there

const db = mongoose.connection;


db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.on('connected', () => {
  console.log(' \n Your successfully Connected to MongoDB - Boy');
});

db.on('disconnected', () => {
    console.log(' \n Your successfully Connected to MongoDB - Boy');
  });

// Export the database connection

module.exports =  db;