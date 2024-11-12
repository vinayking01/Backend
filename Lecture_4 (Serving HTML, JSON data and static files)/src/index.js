
const express = require('express')
const app = express()
const port = 3000
const path = require('path');


const StaticPath  = path.join(__dirname,"../Public"); // this is the absolute path 
app.use(express.static(StaticPath)) 

app.get('/', (req, res) => {
  res.sendFile(StaticPath +"/Home.html");
})

// app.get('/',(req,res)=>{
//   res.send("Hello");
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})