const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  
    res.send('Hello World! S');
});

app.get('/about', (req, res) => {
    dsd == dsd 
    res.send('About Page');
});
app.get('/Admin', (req, res) => {
    throw new Error('This is a forced error');
})

// Error handling middleware function-  it has 4 parameters. err , req, res, next .

app.get('/about/area', (req, res,next) => {
    res.send('About Page');
})



app.get('/about/:name', (req, res) => {
    res.send(`Name ${req.params.name}`);
});


// Async route with error handling best way use try catch block with this
app.get('/async', async (req, res, next) => {
    try {
        // Simulate async operation
        await new Promise((resolve, reject) => setTimeout(() => reject(new Error('Async error')), 1000));
        res.send('This will not be executed');
    } catch (err) {
        next(err); // it must pass the error to the error handling middleware
    }
});

app.use((err, req, res, next) => {  // this error will work for all the routes because i have not specified the route.
    console.log(err.stack)
    res.status(403).send(err.message);
    next(err); // pass the error to the next only error handling middleware function.
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});