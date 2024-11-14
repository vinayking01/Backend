## Requirement - 
1. MongoDB Installed 

## Connection Locally 
1. Localhost - by default running on port 27017 

```javascript

//1.  run command - `mongod` and leave it running.  ->() this start mongodb Server)
//2.  run command - 'mongosh` which open its shell script

```
2. Making connection with database present online .

## Commands

```javascript

1. Show dbs
    'command' -> show dbs
    admin        40.00 KiB
    config      108.00 KiB
    local        72.00 KiB
    mydatabase  108.00 KiB

2. Switching of Database
    'command' -> use mydatabase
    switched to db mydatabase

3. Dropping of Database
    'command' ->  db.dropDatabase()  // preselect the database you want to delete
    { ok: 1, dropped: 'local' }

4. Create Collection     
    'command' ->  db.createCollection('user_data')
    { ok: 1 }

5. show collections ( table name)
    'command' ->  show collections
    myPeopleCollection

6.  Insert Row
    'command'  -> db.user_data.insertOne
        ( 
        { "name": "p3 ", "age": 23, "work": "police", "mobile": "322321212", "email": "eld3er2417@gmail.com", "Salary": 3232}
        )
    {
    acknowledged: true,
    insertedId: ObjectId('6735e0b1bb0e7e2a5e46b79a')
    }

7. Get data from table/ collection 
    'command' ->  db.user_data.find()
    [
    {
        _id: ObjectId('6735e087bb0e7e2a5e46b799'),
        name: 'p1 ',
        age: 23,
        work: 'police',
        mobile: '322321212',
        email: 'elder2417@gmail.com',
        Salary: 32323
    }]

8. Sorting Data/ collection in desc order
    'command' ->  db.user_data.find().sort({name : -1}).pretty()
    [
    {
        _id: ObjectId('6735e0b1bb0e7e2a5e46b79a'),
        name: 'p3 ',
        age: 23,
        work: 'police',
        mobile: '322321212',
        email: 'eld3er2417@gmail.com',
        Salary: 3232
    },
    {
        _id: ObjectId('6735e087bb0e7e2a5e46b799'),
        name: 'p1 ',
        age: 23,
        work: 'police',
        mobile: '322321212',
        email: 'elder2417@gmail.com',
        Salary: 32323
    }
    ]

// more commands available in pdf 

```