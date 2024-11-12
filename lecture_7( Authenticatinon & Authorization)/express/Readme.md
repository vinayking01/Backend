## Authentication using Passport middleware ( without cookie functionality )

1. Password.js is middleware which is used for authentication purpose. along with this we have to Using this we can integrate different authentication strategies like local authentication using usernames and passwords, OAuth, OpenID, and more strategies. All these strategies are available in package form which is required the same installation process.

2. The new LocalStrategy() function from the passport-local package is used to create a new instance of the local authentication strategy for Passport.js. The three arguments (username, password, done) are parameters passed to the callback function that defines how Passport will authenticate the user using the local strategy.
done()- This is a callback function that you call once you have completed your authentication logic. It is used to pass control back to Passport, indicating whether authentication was successful or not.

    Ex- Done used from one of these ways.
    done(null, user): Called when authentication is successful. The user object is attached to the req object as req.user.
    done(null, false): Called when authentication fails (e.g., wrong username or password).
    done(null, false, { message: 'Error message' }): Called when authentication fails, with an optional message that can be displayed to the user.
    done(err): Called when an error occurs during authentication. The err object is passed to Passport.

3. app.use(passport.initialize()); - do the initialization so that it starts initializing.

4. Choose which route you want to authenticate -


## Post Request  - 

 1. Test case  (user creation )- Pass in the body/ form with Post req only  ('/create-user')
    ```
        {
        "username" : "vinsin",
        "password" : "vinsin",
        "name" : "Vinay ",
        "age" : 32,
        "work" : "police",
        "email" : "vinay123@gmail.com"
        }
    ```
2. Test case ( User log in) - Pass in the Query with Get request ('/Person/User/')
    ```
    http://localhost:8000/Person/User/?username=vinsin&password=vinsin

    ```





@ Note - PersonRoutes.js - In this file it contains code which is mainly testing of how the routes work so authentication middleware is nothing to do with it.