//Topic  - Middleware
 //1. A middleware is a function that hooks into the routing process, performing an arbitrary operation at some point in the chain (depending on what we want it to do). 
 //2. Every middleware should ends with either next() function inside the body or by sending the response otherwise it won't move to the next step and give you the error .
 //3. Middleware are Prebuilt which you can install using the same way as packages ,or you can also create the custom middleware .
 //4. Middleware executes in synchronized manner first come first serve.
 //5. Midddleware should always end either with response or next() which leads to the next middleware/routes.

var express = require('express')
var app = express();

const  Port  =  8000;

const BodyParser = require('body-parser') //it is middleware library for express.js,When a request is made to your Express application, body-parser intercepts the request before it reaches your route handlers. this we are using jisse hame khud se http request se data na nikalan pade.
app.use(BodyParser.json())  // it intercepts the data sent by client, if it is in jSON format then it will parse into javascript object and store it into req.body. for other type of data require other middleware req.link etc.

var f = "Vinay SIngh"


app.get('/login', (req, res) => {
  console.log("welcome to login page");
  res.send("you have logged in ")
  
})



 // A) First example  - if you attached the multiple middleware , for passing to the next middleware you must use next() function and if you send the response to the server in any middleware it will stop their and skip the remaining middleware.

/* app.use((req,res,next)=>{
    // res.send("You are in middleware ")
    console.log("In middleware 1")
    next();  // the next function says move to next middleware otherwise the Routes. if you forgot to mention it along with any kind of response it will lead you to the error.

})

app.use((req,res,next)=>{
    // res.send("You are in middleware 2")
    console.log("In middleware 2")
    next();  // the next function says move to next middleware otherwise the Routes. if you forgot to mention it along with any kind of response it will lead you to the error.

})

 app.get('/', function (req, res) {   
    res.send('hello world')
  })
 */
 
  // B) Second Example -- if you have send the response to the client first than you are attaching middleware after that, it won't work for the that type of route in between you want to attach the middleware.
  
 /* app.get('/', function (req, res) {   
    res.send('hello world')
  })

  app.use((req,res,next)=>{
    // res.send("You are in middleware ")
    console.log("In middleware 1")
    next();  // the next function says move to next middleware otherwise the Routes. if you forgot to mention it along with any kind of response it will lead you to the error.

})

app.use((req,res,next)=>{
    // res.send("You are in middleware 2")
    console.log("In middleware 2")
    next();  // the next function says move to next middleware otherwise the Routes. if you forgot to mention it along with any kind of response it will lead you to the error.

})

*/


  //(C) Third Example -  // Define middleware function

/*  const logTime = (req, res, next) => {
    console.log('Time:', Date.now());
    next();
  };
  app.get('/Mytime', logTime, (req, res) => {
    res.send('Hello, Person!');
  });
  
*/


  //(D) Fourth Example -  if wanted to route a details of samsung but not all this in index.js files so you can route it in this way which contain all routes related to samsung only . for this require router middleware use. routing to the other files but for the same category 

  /*
  
  
  */
  var Details =require('./Phones/loggedphones');
  
  app.use('/phone-detail',Details);

  app.get('/',(req,res)=>{
    res.send("everythng completed");
  });


app.listen(Port) 
