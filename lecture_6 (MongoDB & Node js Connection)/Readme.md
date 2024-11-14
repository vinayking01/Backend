### MongoDB Native Driver & Mongoose
1. In mongodb it has inbuilt mongodb driver for making connection with mongo database.

2. Mongoose is not part of mongodb but mostly used driver. Same use for making connection like mongodb driver does. you have to install it.

3. Both Mongoose and the MongoDB native driver are used to connect a Node.js application to a MongoDB database, allowing you to perform CRUD operations (Create, Read, Update, Delete) and interact with your data.

4. In mongoose famous for Creating a structured data model on top of MongoDB with schemas. It simplifies handling data by enforcing a schema, providing query builders, and supporting middleware.

5. Mongoose is very easy to use as compared to Mongodb for example see the below code you will get the idea. You see how less written code can do same work.  
-More learn about mongoose here- https://www.geeksforgeeks.org/mongoose-tutorial/

`In mongoose`
```javascript
const user = new User({ name: 'John Doe', age: 30 });

user.save()
    .then(() => console.log("User saved"))
    .catch(err => console.error(err));

```

`In mongodb`
```javascript
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function insertDocument() {
    await client.connect();
    const db = client.db('myDatabase');
    const collection = db.collection('users');
    
    await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log('Document inserted');
    
    await client.close();
}

insertDocument().catch(console.error);

```