const express = require('express');
const router = express.Router();  // This creates a router instance for handling routes

var phone_name = "samsung";  // Phone name defined globally in this file

// Handle GET request to /phone-detail/Name
router.get('/Name', (req, res, next) => {
    console.log(`Bought SmartPhones: ${phone_name}`);
    res.send(`Bought SmartPhones: ${phone_name}`);
});

// Handle GET request to /phone-detail/
router.get('/', (req, res) => {
    res.send("What details do you want? \n 1. Name \n 2. Price");
});

// Handle GET request to /phone-detail/price
router.get('/price', (req, res) => {
    res.send("Price of SmartPhones: $77272");
});

module.exports = router;  // Export the router so it can be used in other files
