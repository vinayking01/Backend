var express = require('express')
var app = express()
var db = require('./db')  // by writing this single line it start establishing the connection to the database. 
require('dotenv').config(); // this actually makes its variables available in process.env. . Usage - file added for keeping you API password security

const  Port  = process.env.PORT || 8000;

const BodyParser = require('body-parser') //body-parser was a third-party middleware package that allowed Express applications to parse different types of request bodies. It provided parsers for handling URL-encoded form data, JSON data, raw data, and more . Note  -IN new update express provides Alternative which is "urlencoded" Middleware inbuilt in Express itself.

app.use(BodyParser.json())  // it intercepts the data sent by client, if it is in jSON format then it will parse into javascript object and store it into req.body. for other type of data require other middleware req.link etc.

var f = "Vinay SIngh"


app.get('/login', (req, res) => {
  // res.json(f)
  console.log(req.headers);
  
  // Access a specific header (e.g., User-Agent)
  const userAgent = req.get('User-Agent');
  res.send(`User-Agent: ${userAgent}`);
  
})

//  ************************************* Redirect Operation performed using redirect function of response  ****************************
// Route that performs a redirection
app.get('/go-there', (req, res) => {        
  res.send('You have been redirected here!');
});

// Route that triggers the redirection+
app.get('/redirect-me', (req, res) => {
  res.redirect('/go-there');
});

//  ************************************* End of  Redirect Operation performed using redirect function of response  ****************************


const PersonRoutes = require('./Routes/PersonRoutes');
// Use the routers
app.use('/person', PersonRoutes);   //When a request comes in for '/person' or any of its subpaths, Express will execute the middleware or routing logic defined in PersonRoutes. This allows you to modularize your application's routing and handle different parts of the application separately based on the URL paths.


app.get('/', function (req, res) {   
  res.send('hello world')
})


app.listen(Port) 
