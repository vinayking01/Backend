const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const personSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required : true,
    },
    age:{
        type :Number,  
    },
    work:{
        type:String,
        enum : ['chef','police','manager'],  //Yes, you can create separate schemas for different types of work (like Chef, Police, Manager) and still achieve the same functionality. Each type of work can have its own specific schema, and you can use Mongoose's discriminators to manage them. Discriminators allow you to have different models with different schemas but share a common base schema
        required : true,
    },
    mobile:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required:true,
        unique:true,   // for uniqueness
    },
    Address:{
        type: String,
    },
    Salary:{
        type:Number,
    }
}, { collection: 'myPeopleCollection' }); // sending collection name otherwise it will create by default with name "people"

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