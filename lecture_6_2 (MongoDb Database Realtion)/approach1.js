const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection URL
const dbURL = 'mongodb://localhost:27017/Zomato';

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    address: [{
        location: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
    }]
});

const User = mongoose.model('User', UserSchema);

    // Middleware
app.use(express.json());


// instead of creating seperate schema for address we have added here itself because no use of single address schema anywhere without user id.
const adduser = async(req, res) => {
    const user1 = new User({
        username: "Aden",
        address: [
            {
                location: "Gulshan",
                city: "Karachi"
            },
            {
                location: "Clifton",
                city: "Karachi"
            }
        ]
        
    });
    user1.address.push({location: "Defence", city: "goa"});
    const result = await user1.save();
    console.log(result);
}

adduser();


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});