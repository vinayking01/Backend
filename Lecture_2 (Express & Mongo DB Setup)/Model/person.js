const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    age:{
        type :Number,
          
    },
    work:{
        type:String,
        enum : ['chef','police','manager'],
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


//creating model only after schema in which we perform the operation
const Person = mongoose.model('Person_model',personSchema); // 1st argument is Model name you want to give, 2ND ARGUMENT IS the using this schema i want to create

module.exports = Person;