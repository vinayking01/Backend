# Error Handling in Express

## Introduction
Error handling is a crucial part of developing robust server-side applications. In this guide, we will explore how errors are handled in Express, a popular Node.js web application framework. We will also discuss the importance of defining error handlers and the consequences of not doing so.

## Error Handling in Express

### Using Express for Error Handling
- Express provides a simple and efficient way to handle errors in your application. You can define error-handling middleware to catch and process errors that occur during the request-response cycle.
- If any route encounters an error and calls next(err), Express will skip the normal middleware and route handlers and jump directly to error-handling middleware.
- Best practice use error route always at last of all the routes and middleware.
- Express catches and processes errors that occur both synchronously and asynchronously (for asynchronously the code is little different).
you can use try and catch block , or if else conditions.


#### Example of Error Handling Middleware
```javascript
const express = require('express');
const app = express();

// Define a route that throws an error
app.get('/', (req, res, next) => {
    const error = new Error('Something went wrong!');
    error.status = 500;
    next(error);
});

// Error-handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### What If We Don't Define Our Error Handler?
If you do not define an error handler in your Express application, the default error handler will be used. Express comes with a default error handler so you don’t need to write your own to get started. it is by default added in the code at last as middle ware.

#### Consequences of Not Defining an Error Handler
- **Lack of Custom Error Messages**: Without a custom error handler, you cannot provide user-friendly error messages.
- **Security Risks**: The default error handler may expose stack traces and other sensitive information.
- **Inconsistent Error Responses**: Your application may return inconsistent error responses, making it harder to debug issues.


### Common HTTP Error Status Codes

Understanding HTTP status codes is essential for debugging and handling errors in web applications. Here are some of the most commonly used HTTP error status codes that you should know:

- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: The client must authenticate itself to get the requested response.
- **403 Forbidden**: The client does not have access rights to the content.
- **404 Not Found**: The server can not find the requested resource.
- **500 Internal Server Error**: The server has encountered a situation it doesn't know how to handle.
- **502 Bad Gateway**: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request, often due to maintenance or overload.
- **504 Gateway Timeout**: The server, while acting as a gateway or proxy, did not get a response in time from the upstream server.

----



## #New Topic  -  Client Side and Server Side Validations

### Form validators 
when we enter data in the form, the browser and/or the web server will check to see the data is in the correct format and within the constraints set by the application.

### 1. Example of Client-Side Form Validation

Client-side form validation is done using JavaScript. Here is an example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Validation</title>
    <script>
        function validateForm() {
            var x = document.forms["myForm"]["fname"].value;
            if (x == "") {
                alert("Name must be filled out");
                return false;
            }
        }
    </script>
</head>
<body>

<h2>JavaScript Form Validation Example</h2>
<form name="myForm" onsubmit="return validateForm()" method="post">
    Name: <input type="text" name="fname">
    <input type="submit" value="Submit">
</form>

</body>
</html>
```

In this example, the form will not be submitted until the "Name" field is filled out.
#### Other Examples of Form Validators

    1. **Email Validation**:
        ```html
        <input type="email" name="email" required>
        ```

    2. **Number Validation**:
        ```html
        <input type="number" name="age" min="1" max="100" required>
        ```

    3. **Password Validation**:
        ```html
        <input type="password" name="password" minlength="8" required>
        ```

    4. **Pattern Validation**:
        ```html
        <input type="text" name="username" pattern="[A-Za-z]{3,}" required>
        ```

These examples show how to use HTML5 attributes to validate different types of form inputs.

### Note: 
```
Even if we handle form validations on the client side, there are still chances to bypass them by using tools like Postman and other utilities to send data directly to the server. Client-side validation won't work in such cases, which is why server-side validation is also required.

```


### 2. Example of Server-Side Form Validation with Mongoose

-Server-side form validation is crucial to ensure data integrity and security. Here is an example using Mongoose, a MongoDB object modeling tool for Node.js.
- One way to add validation during the routes , and other way is like adding validation in schema which is actually the right practice.

Then, create a Mongoose schema with validation rules:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    age: {
        type: Number,
        min: [1, 'Age must be at least 1'],
        max: [100, 'Age must be less than 100']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    }
});


```

In this example, the `userSchema` defines validation rules for the `name`, `email`, `age`, and `password` fields. If any of these rules are violated, Mongoose will throw a validation error.

To handle these validation errors, you can use a try-catch block when saving a new user:

```javascript

app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


- In this example, when a POST request is made to `/register`, the server attempts to create a new user with the provided data. If the data violates any of the validation rules, a 400 status code and the error message are sent back to the client.

This demonstrates how to perform server-side validation using Mongoose in a Node.js application.

```
