# Basic revision Points of EJS Template

1. Tempalte Engine - ejs, pub , moustache.
2. template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.


'public': This is the name of the directory that will contain your static files. You can change this to any other directory name if your static files are located elsewhere.

    ### Syntax-  
    #### File - index.js
    ```

    command - npm install ejs

    Install Ejs using npm.

    app.set('view engine','ejs')
    app.set('views' , path.resolve("./views"));

    app.get('/home',(req, res)=>{
    res.render('Home',{name_of_person: 'Vinay Singh'}); }) // First Parameter is file name present in view folder and second parameter should always in the form of object
    ```
    #### Home.ejs
    ```
    <div>
        <h1>Hello Welcome <%= name %></h1>
    </div>

    ```


3. It helps you to perform dynamic routing.
4. ### Rules of EJS Control Structures:
    Enclose control structures like if, for, while, etc., within <% %>.
    Ensure that the HTML content inside these structures is properly placed outside the EJS tags

    #### Home.ejs
    ```
    <% const user = { name: 'John Doe' }; %>
    <% if (user) { %>
    <h2>Welcome, <%= user.name %>!</h2>
    <% } else { %>
    <h2>Welcome, guest!</h2>
    <% } %>
    ```

5. EJS templates use special tags to embed JavaScript code within HTML. Here are the key tags:

    (A)  <% %>: Executes JavaScript code but does not output the result.
    #### Home.ejs
    ```
        <% const currentTime = new Date().toLocaleTimeString(); %>
        <p>The current time has been calculated but not displayed.</p>

    ```

    (B) <%= %>: Executes JavaScript code and outputs the result, with HTML escaping.
    #### Home.ejs
     ```
        <p>Current Time: <%= new Date().toLocaleTimeString() %></p>

    ```


    (C) <%- %>: Executes JavaScript code and outputs the result without HTML escaping.
    #### Home.ejs
    ```
        <p>Unescaped HTML: <%- '<strong>This is bold text</strong>' %></p>

    ```
    (D) <%# %>: Used for comments; the content within this tag is not executed or rendered.
    #### Homes.ejs
    ```
        <%# This is a comment and will not appear in the rendered HTML %>
        <p>This line is visible in the HTML output.</p>

    ```

    
