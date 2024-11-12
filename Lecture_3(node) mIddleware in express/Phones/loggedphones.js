const express = require('express');
const router = express.Router();  //This is a built-in middleware function in Express

var phone_name  = "samsung";


router.get('/Name',(req,res,next)=>{
    console.log(`Boughts SmartPhones ${phone_name}`);
    res.send(`Boughts SmartPhones ${phone_name}`);
})


router.get('/',(req,res)=>{
    res.send("What details you want \n 1.Name \n 2.Price")
})

router.get('/price',(req,res)=>{
    res.send("Price of SmartPhones $77272")
})

module.exports = router;