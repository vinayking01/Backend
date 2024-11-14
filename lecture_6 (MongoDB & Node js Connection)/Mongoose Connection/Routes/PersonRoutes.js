const express = require('express');
const router = express.Router();
const Person = require('../Model/person');



// post route to add person
router.post('/', async (req, res) => {   // converting this simple function into async so that we will wait till our data we get or till any error, for error handling we will be using the try and catch block
    try {
        const data = req.body // Assuming the re.body contains the person data

        const NewPerson = new Person(data);  // either we can pass the data directly int the object or we can use NewPerson.name  = data.name
        // NewPerson.name = data.name;
        // NewPerson.mobile = data.mobile;
        // NewPerson.Address = data.Address;

        // save the Newperson to the database
        const ReceivedResponse = await NewPerson.save()
        console.log("Data Saved");
        res.status(200).json(ReceivedResponse) // sending status -200 with data in format of jSON data

    }
    catch (err) {
        console.log("Error");
        res.status(500).json(err, 'Internal Server Error'); // Send a response with status code 500 and JSON error message
    }
});

router.get('/', async (req, res) => {
    try {
        const getdata = await Person.find(); // Use the Mongoose model to fetch all persons from the database
        // When you execute const getdata = await Person.find();, you're using Mongoose's find() method to retrieve data from the Person collection in your MongoDB database. 
        // find() is a Mongoose query method used to find documents in the collection. When called without any conditions, it retrieves all documents in the collection.
        res.status(200).json(getdata); // Send the list of persons as a JSON response
    } catch (err) {
        console.error(err); // Log the error to the console
        res.status(500).json({ error: 'Failed to get the data. Write the right link' }); // Send a response with status code 500 and JSON error message
    }

})

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
        console.error('Error deleting person:',err);
        res.status(500).json({ err: 'Internal server error' });
    }
})

module.exports = router;
