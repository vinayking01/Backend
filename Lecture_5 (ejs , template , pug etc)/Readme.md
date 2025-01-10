# Basic revision Points of EJS Template
## 1. EJS
**Template Engine** -example ejs (Embedded Javascript), pug, mustache, ejs-mate (EJS-Mate is a package that helps you easily manage layouts, partials, and templates in EJS. It simplifies the process of reusing common structures like headers, footers, or entire page layouts across multiple pages.)
- EJS is useful when you need dynamic HTML content or reusable templates on the server side.
- It’s not necessary for static file serving or static websites. 
- At runtime, the template engine replaces variables in a template file with actual values and transforms the template into an HTML file that is sent to the client.
- This makes designing dynamic and reusable HTML pages much easier.
- It also helps in implementing dynamic routing for rendering different views based on the request.
- 'public': This is the name of the directory that will contain your static files. You can change this to any other directory name if your static files are located elsewhere.
- It helps you to perform dynamic routing.

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


    ### # Rules of EJS Control Structures:
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

    ### # EJS templates uses special tags to embed JavaScript code within HTML. Here are the key tags:

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

## 2. EJS-Mate 
- Extended version of EJS
- EJS-Mate is a package that helps you easily manage layouts, partials, and templates in EJS. It simplifies the process of reusing common structures like headers, footers, or entire page layouts across multiple pages.
- installation through - **npm i ejs-mate**
- EJS-Mate allows you to use a common layout for multiple EJS templates, so you don't need to repeat the same structure in each file. This acts as a boilerplate, saving time and reducing redundancy
- checkout here [Ejs Mate link](https://www.npmjs.com/package/ejs-mate)