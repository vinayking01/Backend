const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection URL
const dbURL = 'mongodb://localhost:27017/Resturant';

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

    
// Middleware
app.use(express.json());


// order schema
    const OrderSchema = new mongoose.Schema({ 
        item : {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    });
    
    // customer schema
    const CustomerSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        ordersDetails: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order'    // Add that "collection name" which you want to refer
            }
        ]
    });
    

CustomerSchema.pre('findOneAndDelete', async function () {
    console.log("Deleting multiple documents (pre middleware)");
    // next();  // Proceed with the delete operation
});


CustomerSchema.post('findOneAndDelete', async (user)=>{
    console.log("post middleware");
    if(user.ordersDetails.length){
       let res =  await Order.deleteMany({_id: {$in: user.ordersDetails}});
        console.log(res);
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);
const Order = mongoose.model('Order', OrderSchema);

    //Add orders
const addOrders = async() => {
let res = await Order.insertMany([
        {item: "Lachga", price: 200},
        {item: "Shake", price: 300},
        {item: "Halwa", price: 150}
        ]);

        // console.log(res);
}
// addOrders();


// Add customer
const addCustomer = async() => {
    let customer1 = new Customer({
        username: "love"
    });
    let order1 = await Order.findOne({item: "Lachga"});
    let order2 = await Order.findOne({item: "Shake"});

    customer1.ordersDetails.push(order1);   // this will push the object id of order1 in ordersDetails array because we have use ref in schema 
    customer1.ordersDetails.push(order2);
    const result = await customer1.save();
}


// find customer
const findCustomer = async() => {
    let customer1 = await Customer.find({});
    console.log(customer1);

    // populate the ordersDetails array
    // const customer2 = await Customer.find({}).populate('ordersDetails');
    // console.log(customer2);

}
// addCustomer();
findCustomer();



// Handling Deletion in Mongoose
//1st method
const deleteUser = async () => {
    try {
        // Delete multiple users where the username matches a certain condition
        const result = await Customer.findOneAndDelete({username: 'love'});
        console.log('Deleted users:', result);
    } catch (error) {
        console.error('Error deleting users:', error);
    }
}
deleteUser();
//2nd method - using mongoose middleware for the situation where we want to delete all the posts of the user when user is deleted.
// Pre & post middleware



// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});