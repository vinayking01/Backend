const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const personSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'police', 'manager'],
        required: true
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number
    }
}, { collection: 'voting Application' }); // sending collection name otherwise it will create by default with name "people"

// Hash the password before saving the user - pre is the middleware function which alaways run whenever data is daved or updated 
personSchema.pre('save', async function (next) {
    const persons = this; // this keyword refers the record we are working with
    if (!persons.isModified('password')) return next();

      try {
        const salt = await bcryptjs.genSalt(10);
        persons.password = await bcryptjs.hash(persons.password, salt);
        next();
      } catch (err) {
        next(err);
      } 
  });

  

//creating model only after schema in which we perform the operation
const Person = mongoose.model('Person_model',personSchema); // 1st argument is Model name you want to give, 2ND ARGUMENT IS the using this schema i want to create

module.exports = Person;

