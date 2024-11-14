## Topic  - Middleware
1. A middleware is a function that hooks into the routing process, performing an arbitrary operation at some point in the chain (depending on what we want it to do). 
2. Every middleware function should ends with either next() function inside the body or by sending the response otherwise it won't move to the next step and give you the error .
3. Middleware are Prebuilt which you can install using the same way as packages ,or you can also create the custom middleware .
4. Middleware executes in synchronized manner first come first serve.
5. Middleware should always end either with response or next() which leads to the next middleware/routes
6. You register your middleware function using app.use()

## Middleware Types
1. Application Middlewares - app.use() or route-specific methods (app.get(), app.post(), etc.). It applies globally or to specific routes. Means it runs on every request and the orders of middleware matters as it is synchronous.

```javascript

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

```
2. Router-level middleware: Associated with specific routes using router.use().

```javascript
  `App.js`
  
  const Details = require('./Phones/loggedphones');
  
  app.use('/phone-detail', Details);


```

3. Error-handling middleware: Handles errors during the request-response cycle. Defined with four parameters (err, req, res, next).

```javascript

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

```

4. Built-in middleware: Provided by Express (e.g., express.static, express.json, etc.).

## Some Concepts

```javascript

// 1- Applying middleware in single route . ( you can add your created middleware function  or either already present middleware etc.)

 const logTime = (req, res, next) => {
    console.log('Time:', Date.now());
    next();
  };
  app.get('/Mytime', logTime, (req, res) => {
    res.send('Hello, Person!');
  });
  
// 2. - Applying middleware in group of route

  const Details = require('./Phones/loggedphones');
  
  app.use('/phone-detail', Details);


// 3. First example  - if you attached the multiple middleware , for passing to the next middleware you must use next() function. if you send the response to the server in any middleware and also don't use next() call then it will stop there and skip the remaining middleware .

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


// 3. Second Example - if you have sent the request to the client first than you are attaching middleware after that, it won't work for the that type of route in between you want to attach the middleware.


 app.get('/', function (req, res,next) {  
  console.log("Hello world") 
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
    next();  

})






```

### Question - Difference between app.use( '/' ,middleware ) and app.get('/' ,middleware )

```javascript

app.use("/user", (req, res, next) => {  
   
    console.log("User-specific middleware for all HTTP methods");  
    next();
}); 
 // "1. In this middleware for all HTTP methods" for both GET and POST requests on /user
// Matches /user and any path starting with /user

app.get("/user", (req, res) => {  
    res.send("User GET endpoint");
});

//1. Specific middleware for GET requests on a route
// 2. Matches only /user exactly


```
