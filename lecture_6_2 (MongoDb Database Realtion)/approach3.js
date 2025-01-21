// store a reference to the parent document inside child.
// Example of Instagram post of multiple users

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection URL
const dbURL = 'mongodb://localhost:27017/Insta';

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

    
// Middleware
app.use(express.json());


// User schema
    const UserSchema = new mongoose.Schema({ 
        username : {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    });


// customer schema
const PostsSchema = new mongoose.Schema({
    Content: {
        type: String,
        required: true
    },
    Like:{
           type: Number,
           required: true,
           default: 0
        },
    user: { 
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});



const User = mongoose.model('User', UserSchema);
const Posts = mongoose.model('Post', PostsSchema);



//Add user
const addUsers = async() => {
    let res = await User.insertMany([
        {username: "Ali", email: "Ali1212@gmail.com"},
        {username: "Avni", email: "Avni212@gmail.com"},
        {username: "Aman", email: "Amana232212@gmail.com"},
    ]);

    // console.log(res);
}

//Add posts
const addPosts = async() => {
    const post1  = {
        Content: "Ali first Post ", 
        Like: 0, 
        user: await User.findOne({username: "Ali"})
    }
    const post2  = {
        Content: "Ali second post", 
        Like: 3, 
        user: await User.findOne({username: "Ali"})
    }
    const post3  = {
        Content: "Avni first post", 
        Like: 0, 
        user: await User.findOne({username: "Avni"})
    }

    let res = await Posts.insertMany([post1, post2, post3]);
    // console.log(res);
}
// addUsers();
// addPosts();


// find posts
const posts = async() => {
    let post = await Posts.find({});
    console.log(post);
}
// posts();


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});