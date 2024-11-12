const express = require('express');
const router = express.Router();
const Person = require('../Model/person');
const Apassport = require('../auth');
const bcryptjs = require('bcryptjs')
const {jwtAuthMiddleware, generateToken} = require('../jwt');

const AuthCreated = Apassport.authenticate('local', { session: false });

router.use(Apassport.initialize());

// POST route to add a person
router.post('/signup', async (req, res) => {
    try {
        const data = req.body; // Assuming req.body contains the person data

        const newPerson = new Person(data);

        // Save the new person to the database
        const receivedResponse = await newPerson.save();
        console.log("Data Saved");

        const payload = {   // you can create token with anything using as payload like here i used response id and username
            id: receivedResponse.id,
            username: receivedResponse.username
        }
        // console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        // console.log("Token is : ", token);

        res.status(200).json({response: receivedResponse, token: token});

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

const ComparePassword = async function (CandidatePassword, StoredPassword) {
    const isMatch = await bcryptjs.compare(CandidatePassword, StoredPassword);  // the compare function is provided by bcrypt.js and it takes two argument ( user password, hashedpassword ); it process the hashed password extract the salt from it and then combine it with user password, provide new hash and then match it with hash present in database.  
    return isMatch;
};


// Login Route
router.post('/login', async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Find the user by username
        const user = await Person.findOne({ username : username});
        console.log(user.password , password)
        // If user does not exist or password does not match, return error
        const isPasswordMatch = await ComparePassword(password, user.password);
        if (!user || !isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

         // generate Token 
         const payload = {
            id: user.id,
            username: user.username
        }
        const token = generateToken(payload);

        // return token as response
        res.json({user : user, token:token})

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {   
    try{
        const userData = req.userEncoded;  // during jwt.js we created a object where we stored and middleware ka toh yahi kam hota hai req client tak pauchne se phele usme chg  kr dena ya fir kuch add kr dena tpoh whai kra hai.
        console.log("User Data: ", userData);

        const userId = userData.id;
        const user = await Person.findById(userId);

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// router.get('/User', AuthCreated, async (req, res) => { // this is the authentication using Passport middleware
//     try {
//         const getdata = await Person.find({ username: req.query.username });
//         res.send(getdata)
//     } catch (err) {
//         console.error(err); // Log the error to the console
//         res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON error message
//     }
// })


// post route to add person
router.post('/', async (req, res) => {
    try {
        const data = req.body; // Assuming req.body contains the person data

        const newPerson = new Person(data);

        // Save the new person to the database
        const receivedResponse = await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(receivedResponse); // Sending status 200 with data in JSON format

    } catch (err) {
        console.log("Error", err);
        res.status(500).json({ error: 'Internal Server Error', details: err.message }); // Send a response with status code 500 and JSON error message
    }
});


// Parmaterized Endpoints
router.get('/:TypeOfWork', async (req, res) => {   // ":variablename" :- in this way we create paramaterized endpoints which support different routes easily.
    try {
        const Typeofwork2 = req.params.TypeOfWork; // Extract the work type from the URL parameter
        // Validation check 
        if (Typeofwork2 == 'chef' || Typeofwork2 == 'police' || Typeofwork2 == 'manager') {
            const SelectivePerson = await Person.find({ work: Typeofwork2 }); // Send the list of persons with the specified work type as a JSON response
            res.status(200).json(SelectivePerson); // Send a successful response with status code 200 and JSON data
        } else {
            res.status(400).json({ error: 'Invalid work type' }); // Send a response with status code 400 and JSON key object error message
        }
    } catch (err) {
        console.log(err, "Failed to get the data. Write the right link");
        res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON key object error message
    }

})

// update Operation
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; //  Extract the person's ID from the URL parameter

        const PersonData = req.body; // Updated data for the person extracting from request body

        // Assuming you have person model and mongoose provide oyu inbuilt check method function 
        const UpdatePerson = await Person.findByIdAndUpdate(personId, PersonData,
            {
                new: true, // true -Return the updated document 
                runValidators: true, //true - Run Mongoose data insertion validation like we did initially during insertion of data
            });

        if (!UpdatePerson) {
            return res.status(404).json({ err: 'person not found' });  //So, err in {err: 'person not found'} is just a key in the JSON object and doesn't refer to any actual error object.
        }
        //sending the updated data as json
        console.log("Data Updated");
        res.status(200).json(UpdatePerson)

    } catch (err) {
        console.log(err, "Failed to updating the data");
        res.status(500).json({ error: 'Internal Server Error' });  //So, err in {err: 'person not found'} is just a key in the JSON object and doesn't refer to any actual error object.
    }
})

// Delete the Matched Data

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; //  Extract the person's ID from the URL parameter

        const deletedPerson = await Person.findByIdAndDelete(personId);

        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        res.json({ message: 'Person deleted successfully' });// Send a success message as a JSON response

    } catch (err) {
        console.error('Error deleting person:', err);
        res.status(500).json({ err: 'Internal server error' });
    }
})



module.exports = router;
