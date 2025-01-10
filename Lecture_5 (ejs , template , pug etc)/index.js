/* Template Engine - ejs, pug, mustache
- EJS is useful when you need dynamic HTML content or reusable templates on the server side.
- It’s not necessary for static file serving or static websites. 
- At runtime, the template engine replaces variables in a template file with actual values and transforms the template into an HTML file that is sent to the client.
- This makes designing dynamic and reusable HTML pages much easier.
- It also helps in implementing dynamic routing for rendering different views based on the request.
*/

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Setting up the template engine
app.set('view engine', 'ejs'); 
// This line tells Express to use 'ejs' as the template engine.

// Setting the views directory
app.set('views', path.resolve('./views'));  
// This line tells Express where to find the EJS templates (HTML files and other files used for rendering).

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));  
/* 
Because you have used static files inside the EJS template you have to use the above line. This middleware is used to serve static files like CSS, JavaScript, images, etc. Even if you correctly link static files in your EJS or HTML template, the browser won't be able to access them unless you configure the server to serve them using this middleware.

Example:
Suppose you have a CSS file called 'styles.css' in the 'public' directory. 
To use it in your EJS or HTML file, you can link it like this:

<link rel="stylesheet" href="/styles.css">

Here, the browser requests the `styles.css` file from the root of your server.
Express will serve it from the `public` directory because of the middleware configuration.
*/

// Example route
const dataR  = {
  name : "vinay Singh",
  fruits : ['apple' , 'banana']
};
// const data1 = "vinay Singh"; // variables are not allowed to directly pass in ejs.

app.get('/home',(req, res)=>{
    res.render('Home', { 
      title: 'Welcome to EJS',  // First variable
      data: dataR              // Second variable
    }); // first parameter is name of the file present in view folder and second parameter should be always object which contains all your variables you want to pass. 
    
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})