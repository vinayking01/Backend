
var express = require('express')
var app = express()
var db = require('./db')

const AllPerson = require('./Model/person');
require('dotenv').config(); // .env file added for keeping you API password security

const Port = 8000;
const BodyParser = require('body-parser')
app.use(BodyParser.json())

var f = "Vinay SIngh"



app.get('/login', (req, res) => {
  console.log(req.headers);
  res.json(f)
})

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

var Person =  require('./Routes/PersonRoutes.js')


app.use('/Person',Person);   // after applying the authentication this way will authenticate in every req. of person.

app.get('/Allperson', async (req, res) => {
  try {
    const getdata = await AllPerson.find();
    res.send(getdata)
  } catch (err) {
    console.error(err); // Log the error to the console
    res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON error message
  }

})



app.listen(Port) 
