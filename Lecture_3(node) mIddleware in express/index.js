//Topic  - Middleware

var express = require('express')
var app = express();

const  Port  =  8000;

const BodyParser = require('body-parser') //it is middleware library for express.js,When a request is made to your Express application, body-parser intercepts the request before it reaches your route handlers. this we are using jisse hame khud se http request se data na nikalan pade.
app.use(BodyParser.json())  // it intercepts the data sent by client, if it is in jSON format then it will parse into javascript object and store it into req.body. for other type of data require other middleware req.link etc.

var f = "Vinay SIngh"


app.get('/login', (req, res,next) => {
  console.log("welcome to login page");
  res.send("you have logged in ")
})

 
app.use((req,res,next)=>{
  // res.send("You are in middleware ")
  console.log("In middleware 1")
  next();  // the next function says move to next middleware otherwise the Routes. if you forgot to mention it along with any kind of response it will lead you to the error.

})

app.use((req,res,next)=>{
  // res.send("You are in middleware 2")
  console.log("In middleware 2")
  next();  

})

app.get('/', function (req, res) {   
  res.send('hello world')

})


//Applying middleware in single route ( either yours or prebuilt)

 const logTime = (req, res, next) => {
    console.log('Time:', Date.now());
    next();
  };
  app.get('/Mytime', logTime, (req, res) => {
    res.send('Hello, Person!');
  });
  

  //(Applying middleware in group of route) -  if wanted to route a details of samsung but not all this in index.js files so you can route it in this way which contain all routes related to samsung only . for this require router middleware use. routing to the other files but for the same category 

  const Details = require('./Phones/loggedphones');
  
  app.use('/phone-detail', Details);



app.listen(Port) 
