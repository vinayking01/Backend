var express = require('express')
var app = express()
var db = require('./db')
require('dotenv').config(); // .env file added for keeping you API password security

const  Port  = 8000;

const BodyParser = require('body-parser') 
app.use(BodyParser.json())  

var f = "Vinay SIngh"

// Middleware function -the defining characteristic of a middleware function is its signature: (req, res, next)
const logRequest = (req, res, next)=>{
  console.log(`${new Date().toLocaleString()} made for request - ${req.originalUrl}`)
  next();
}

// Two ways to use the middleware - Middleware functions are typically used with app.use() or directly in route definitions. For example:
//(1) app.use(logRequest)

//(2) using directly in the route
app.get('/login',logRequest, (req, res) => {
  console.log(req.headers);
 res.json(f)
})

const PersonRoutes = require('./Routes/PersonRoutes');

// Use the routers
app.use('/person', PersonRoutes); 
app.get('/', function (req, res) {   
  res.send('hello world')
})



app.listen(Port) 
