// Tempalte Engine - ejs, pub , mosutache
// template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
//  It helps you to perform dynamic routing

const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine','ejs')
app.set('views' , path.resolve("./views"))  // folder where you put the ejs templates(html files and other files for rendering)

app.use(express.static(path.join(__dirname, 'public'))); //this is only for any kind of static files want to server or present in project. In an Express.js application, even if you correctly link to static files to your EJS template or anywhere even in simple html file, without this line ,  these files won't be accessible to the browser unless you configure the server to serve static files using the express.static middleware. This middleware is essential because it tells the server to make the files in a specified directory (like public) available to clients.this way first 

/*eg - suppose you link styel.css to html page .You should link to the CSS file in your EJS template without including the public part of the path. For example:

<link rel="stylesheet" href="/styles.css">  This tells the browser to request the styles.css file from the root of your server, and Express will serve it from the public directory.

*/


const dataR  = {
  name : "vinay Singh",
  fruits : ['apple' , 'banana']
};
// const data1 = "vinay Singh"; // variables are not allowed to directly pass in ejs.

app.get('/home',(req, res)=>{
    res.render('Home',{ data: dataR }); // first parameter is name of the file present in view folder and second parameter should be always object which contains all your variables you want to pass. 
    
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})