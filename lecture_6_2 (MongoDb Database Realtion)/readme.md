### One-to-Many Relationship in MongoDB Using Mongoose
1. One two Few Approach -1
    - Storing child data in parent table.
    - This project demonstrates how to implement a One-to-Many (1:N) relationship using Mongoose in a Node.js application. The example models a user and their associated addresses, showcasing how a single user can have multiple address entries. (example )

2. One two Few Approach - 2
    - Store the reference to the child document inside parent.
    - when you define a field with a reference using ref in Mongoose, it always stores only the ObjectId of the referenced document in the database, not the entire data. This is the default behavior of Mongoose to maintain a normalized database structure.
    - To fetch full details of the referenced documents, use the .populate() method in queries."
    - The populate() function in Mongoose is used to fetch detailed data from a referenced document instead of just the ObjectId stored in the database. It is typically used in schemas where you have relationships between collections using ref.
    
    ### Syntax 
    ```
    without `Populate()`
    const customer = await Customer.findOne({ username: "Rahul Kumar" });
    console.log(customer);
    // Output: 
    // {
    //   _id: "12345",
    //   username: "Rahul Kumar",
    //   ordersDetails: ["67890", "54321"] // Only ObjectIds of orders
    // }
    
    ```
    with `Populate()`
    ```
    const customer = await Customer.findOne({ username: "Rahul Kumar" }).populate('ordersDetails');
    console.log(customer);
    // Output: 
    // {
    //   _id: "12345",
    //   username: "Rahul Kumar",
    //   ordersDetails: [
    //     { _id: "67890", item: "Biryani", price: 200 },
    //     { _id: "54321", item: "Karahi", price: 300 }
    //   ]
    // }
    ``` 

3. One to few Approach 3
    - store a reference to the parent document inside child.( just opposite of approach 2).

### Rules of Mongo DB Relationship
[6 Rules of Thumb for MongoDB Schema Design](https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design?msockid=2fdf6042e33a62ac198774f2e23c6399)


## Handling Deletion in Mongoose 
Mongoose provides multiple ways to delete data from a MongoDB database, along with support for middleware to customize behavior during deletion.
In Mongoose, middleware (pre and post hooks) must be defined before any deletion operation for them to work properly.

### **1. Direct Methods**
These methods perform deletion directly:

- **`deleteOne()`**: Deletes a single document matching a condition.
- **`deleteMany()`**: Deletes multiple documents matching a condition.
- **`findByIdAndDelete()`**: Deletes a document by its `_id`.
- **`findOneAndDelete()`**: Deletes the first document matching a condition.

### **2. Middleware for Deletion**
- Mongoose supports middleware (hooks) for adding custom logic **before** or **after** deletion operations.
- Must Note This is pre and post must used before creation of model because mongoose.model() locks in the schema's configuration, including its middleware, at the time of model creation. 

#### **Types of Middleware**
1. **Document Middleware**:  
   Runs when using document instance methods like `deleteOne()` on a specific document.
   ```javascript
   schema.pre('deleteOne', { document: true, query: false }, function (next) {
       console.log('Before deleting the document:', this);
       next();
   });

2. **Query Middleware** -  
    DeleteMany(), DeleteOne(), findOneAndDelete()
