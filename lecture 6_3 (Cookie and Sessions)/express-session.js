const express = require('express');
var session = require('express-session');
const app = express();
const port = 3000;

// using session as middleware it will create a single session id for every request
app.use(session({
    secret: 'your-secret-key', // A secret key for signing the session ID cookie
    resave: false,             // Prevents resaving a session that hasn't been modified
    saveUninitialized: true,   // Saves new sessions even if they haven't been modified
    cookie: {
        secure: false,         // Set to true if using HTTPS
        maxAge: 60000          // Session expiration time in milliseconds
    }
}));

app.get('/',(req,res)=>{
    res.send("Helo world")
}
)


app.get('/reqcount', (req, res) => {
    if(req.session.count)
    {
        req.session.count ++;
    }
    else{
        req.session.count =1;
    }

    res.send(`you send a request ${req.session.count} times`);
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


