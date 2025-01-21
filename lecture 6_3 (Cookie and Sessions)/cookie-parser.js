const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;

app.use(cookieParser('My secret 123'));

app.get('/set', (req, res) => {
    res.cookie('name','Abhi');  //  normal cookie
    res.cookie('age','32' , {signed : true}); // signed cookie, here if some one try to change the value of age in the cookie through inspect, it will not work as it is signed cookie and give false
    res.send("cookie has been created!")
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/see', (req, res) => {
    const {name}  = req.cookies;
    res.send(` Hello ${name} , Your age is ${req.signedCookies.age}`);  // accessing the cookie
});





app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


