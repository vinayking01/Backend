## 1. Node js 
- Node.js is a powerful runtime that allows JavaScript to run on the server side, enabling developers to use a single language for both front-end and back-end development. 
- It operates on an asynchronous, non-blocking I/O model, which means it can handle multiple requests efficiently without waiting for each to complete before moving on to the next.
- It is single threaded
- Under the hood works on JS but and that V8 engine created using C++ language.
- Node js Code supports Common Js so write according to this only but if you wan tot use modern Ecmma Js you can by making chg in Package json ( type : module) .
- Node js is not library , framework , module. It is runtime environment.

    ### - Runtime Environment
    - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    - It is powered by the V8 engine, which executes the code

    ### - Event Driven - Architecture
    - Node.js operates on an event-driven architecture.
    - This design efficiently handles asynchronous operations.

    ### - Development History
    - Ryan Dahl developed Node.js in 2009.
    - To run JavaScript code, you need a JavaScript engine, whether it's in a browser like Chrome or a server environment.
    - Initially, Ryan worked with Spider Monkey, a JavaScript engine, but switched to the V8 engine from Google Chrome due to its performance.
    - Ryan developed Node.js independently, but Joyent, a company interested in similar technologies, supported him. Originally called "web.js," it was later renamed to Node.js when its full potential became clear.

    ### - Comparison with Apache HTTP Server
    - Before Node.js, the Apache HTTP Server was widely used but had blocking I/O, meaning it could handle fewer - concurrent requests.
    - Ryan wanted to create a non-blocking I/O server, leading to Node.js's ability to handle multiple requests with fewer threads.

    ### - NPM (Node package Manager)
    - Used to manage packages ( library or modules) in js Projects , especially in Node js applications
    - Install the packages others have written , saving time and effort.
    -  Manage dependencies by tracking versions and updates

    ### - Servers in Node js 
    - A server is a system that provides resources, data, services, or programs to other computers, known as clients, over a network. In the context of Node.js, a server is used to handle and respond to client requests, typically over the HTTP protocol. Node.js is particularly efficient as a server due to its event-driven, non-blocking I/O architecture. This means Node.js can handle multiple client requests simultaneously without creating new threads for each request, reducing the resource overhead and increasing the performance of the application.

    ### - Node Js Conversion High-Level to Machine Code
    - JavaScript is a high-level, interpreted language that needs to be converted into machine code for execution by the CPU. In Node.js, this conversion process is managed by the V8 engine. The process begins with parsing, where the V8 engine reads and checks the JavaScript code for syntax errors, converting it into an Abstract Syntax Tree (AST). This AST is then transformed into an Intermediate Representation (IR), which is a lower-level, platform-independent form of the code. Finally, the IR is converted into machine code through Just-In-Time (JIT) compilation. This machine code is executed directly by the CPU, allowing the Node.js application to run efficiently. The V8 engine continuously optimizes this process, adjusting the machine code based on runtime performance data, which ensures the application runs as quickly as possible.

___

## 2. Importing and Exporting in Node.js
### Importing and Using
To import a function from a module, use the `require` function. Here's an example:

```javascript
// In file app.js
const greet = require('./greet');
console.log(greet('World')); // Output: Hello, World!
```

### Exporting Multiple Functions/Variables

To export multiple functions or variables, attach them to the `module.exports` object:

```javascript
// In file utils.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
```

### Importing Multiple Exports

To import multiple exports from a module, use destructuring:

```javascript
// In file app.js
const { add, subtract } = require('./utils');
console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### How `require` Works ?

When you use `require` to import a module, Node.js executes the code in the module file. Only the properties of `module.exports` are exposed to the importing file.

Example:

```javascript
// In file data.js
const secret = 'hidden';
const publicData = 'visible';

module.exports = publicData;
```

```javascript
// In file app.js
const data = require('./data');
console.log(data); // Output: visible
console.log(secret); // Error: secret is not defined
```

In the example above, `secret` is not accessible outside `data.js` because it was not exported using `module.exports`.

### `require` Mechanism in Node.js

- The `require` statement in Node.js is used to import modules. Here’s a detailed five-step mechanism of how `require` works:

    1. **Resolve**: Node.js determines the full path of the module. It first checks if the module is a core module (like `fs` or `path`). If not, it looks in `node_modules` directories, and if the module is a file, it uses the provided path.
    2. **Load**: Node.js reads the file content and loads it into memory. If the file is in JavaScript, it will be treated as a script.
    3. **Wrap**: Node.js wraps the module code in a function to provide local scope. This function looks like:

        ```javascript
        (function (exports, require, module, __filename, __dirname) {
            // Module code
        });
        ```

    4. **Compile**: Node.js compiles the module code to machine code or JavaScript code (if using a JavaScript file).
    5. **Execute**: The compiled code is executed within the context of the wrapped function. The module code is run, and `module.exports` is populated with the exported values.

____

## 3. .mjs vs. .cjs Modules
#### .cjs Modules (CommonJS)

- **File Extension:** `.js` or `.cjs`
- **Module System:** CommonJS
- **Usage:** `require()` and `module.exports`

Example:

```javascript
// In file common.js
module.exports = function() { /* ... */ };
```

#### .mjs Modules (ES Modules)

- **File Extension:** `.mjs`
- **Module System:** ES Modules (ESM)
- **Usage:** `import` and `export`

Example:

```javascript
// In file module.mjs
export function greet(name) {
  return `Hello, ${name}!`;
}
```

#### Importing in .mjs

```javascript
// In file app.mjs
import { greet } from './module.mjs';
console.log(greet('World')); // Output: Hello, World!
```

### Differences Between .mjs and .cjs

- **Syntax:** `.cjs` uses `require` and `module.exports`, while `.mjs` uses `import` and `export`.
- **Compatibility:** `.mjs` is the standard ES Module syntax and is compatible with modern JavaScript, while `.cjs` is used for legacy Node.js modules.
- **Use Case:** Use `.mjs` for new projects or when using features of ES Modules, and `.cjs` for legacy code or when using the CommonJS module system.

### Summary

- `module.exports` is used to export functions, objects, or variables from a module.
- `require` imports these exports into another module.
- `.cjs` modules use CommonJS syntax (`require` and `module.exports`), while `.mjs` modules use ES Module syntax (`import` and `export`).

## 4. Global Variables in Node js 
- `__dirname` - __dirname: This global variable contains the absolute path of the directory in which the currently executing script resides. eg- console.log(__dirname)
- `__filename` - __filename: This global variable contains the absolute path of the currently executing script file. eg-  console.log(__filename)
- `Process` - process is a global object that gives you essential information about and control over the Node.js environment,

## 5. Built in Modules ( core Modules) 

### a. HTTP modules 
- http.createServer() creates an HTTP server object, which listens for HTTP requests on a specified port.
- Callback Parameters: The callback receives two main objects: req (request) and res (response). 

    ```javascript
    const http = require('http');

    const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Sets the HTTP status code and response headers for the outgoing response.
    res.write(JSON.stringify({ message: "Hello, World!" })); // Writes data to the response body in chunks. This is useful for sending large data progressively or streaming data.
    res.end('Hello, World!');  // this is used to end the connection otherwise it will run continuously

    server.listen(3000, () => {
    console.log('Server is listening on port 3000');
    });

    ```
- `req` - 
    ```javascript

    if (req.method === 'GET') {   // (e.g., GET, POST, PUT, DELETE)
        res.end('This is a GET request');
    }

    // handling routes]
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    } else if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home Page');
    }

    // same like this multiple methods exist can check in internet according to the usage.

    ```

### b. fs Module
- perform operations like reading, writing, and manipulating files and directories. 

```javascript
// 1 . fs.readFile(path, options, callback)  - Asynchronous
    const fs = require('fs');
    fs.readFile('example.txt', 'utf8', (err, data) => { // this is simple function not a promise

    }

// 2. fs.readFileSync(path, options)
    try {
        const data = fs.readFileSync('example.txt', 'utf8');   // ( path: Path of the file to read., options: Optional settings (encoding, mode).)
        console.log('File contents:', data);
    } catch (err) {
        console.log('Error reading file:', err);
    }

// 3. fs.writeFile(path, data, options, callback) - If the file does not exist, it will be created.
    fs.writeFile('example.txt', 'Hello, world!', 'utf8', (err) => {
    }

//4. fs.appendFile(path, data, options, callback)
    fs.appendFile('example.txt', 'Appended text.', 'utf8', (err) => {
    }

//5. Create File (fs.open / fs.writeFile)  - If the file doesn't exist, fs.open can create it in write mode.
    fs.open('newfile.txt', 'w', (err, fd) => {
    }

//6. fs.unlink - Delete File (fs.unlink)
    fs.unlink('newfile.txt', (err) => {
        if (err) {
            console.log('Error deleting file:', err);
        } else {
            console.log('File deleted successfully');
        }

//7. fs.readdir - It is a method in Node.js's fs (file system) module, used to read the contents of a directory. It lists the files and subdirectories within a specified directory.

    fs.readdir('./path/to/directory', (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }
        console.log("Directory contents:", files);
    });

//8. fs.readstream - It is designed for efficient handling of large data transfers like reading/writing files or network communications. They allow data to be processed in chunks rather than loading entire files into memory at once. ( this is required when we are reading the data from the file and we storing the data in the variable which has some limit , suppose the files size is vary large so in that case it won't be properly handled without streams )

    Types of Streams
    a. Readable Streams: For reading data (e.g., from a file).
    b. Writable Streams: For writing data (e.g., to a file).
    c. Duplex Streams: For both reading and writing data.
    d. Transform Streams: Duplex streams with a transformation (e.g., compressing data on the fly).

    const fs = require('fs');
    const readStream = fs.createReadStream('path/to/file.txt', { encoding: 'utf8', highWaterMark: 64 * 1024 });

```

### c. Path Module - Path Information 
```javascript
1. path.basename() - Returns the last part of a path (file or directory name).
    Parameters:
    path: Full path to the file or directory.
    ext: Optional. If provided, it removes this file extension from the result.

    const path = require('path');
    console.log(path.basename('/user/docs/file.txt')); // Output: file.txt

2. path.join() - Joins multiple segments of a path, creating a normalized path.

    console.log(path.join('/user', 'docs', 'file.txt')); // Output: /user/docs/file.txt

3. Path.resolve() - Resolves a sequence of paths into an absolute path.

    console.log(path.resolve('user', 'docs', 'file.txt')); // Output: /current_dir/user/docs/file.txt

4. Path.parse() - Parses a path into an object containing root, dir, base, name, and ext.

    console.log(path.parse('/user/docs/file.txt'));
    /*
    Output:
    {
        root: '/',
        dir: '/user/docs',
        base: 'file.txt',
        name: 'file',
        ext: '.txt'
    }
    */

```

### d. Process  - helps interact with the running Node process:

##  6. Events & Emitter in node js 
- The EventEmitter class in Node.js is a core module that provides a way to handle asynchronous events. It objects to emit events and other objects to listen and respond to those events.
- it is different than other module because here when we import module it returns the events emitter class not object.
- ( Dekhiye node js me koi button toh hote nahi toh event handle kasie kre,? isi ka solution event ke through kiya jatga hai . )
- Import the events module. -> Create an instance of EventEmitter. -> Define listeners using .on() or .once(). -> Emit events using .emit().

```javascript

const EventEmitter = require('events'); // Import EventEmitter class from the events module

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter(); 

// Define an event handler- Sets up a listener for the 'greet' event. When 'greet' is emitted, it runs the callback, which in this case logs a greeting to the console.
eventEmitter.on('greet', (name) => {    
    console.log(`Hello, ${name}!`);
});

myEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
}); 

// Emit the event  - Emits the 'greet' event and passes 'Alice' as an argument. This triggers the listener and logs the greeting.
eventEmitter.emit('greet', 'Alice');

```
### Event Emitter Methods
    a. .on(eventName, listener): Registers a listener for an event. The listener will be called every time the event is emitted.
    b. .once(eventName, listener): Registers a one-time listener that will be removed automatically after it is triggered once.
    c. .emit(eventName, ...args): Emits an event, triggering all listeners for that event.
    d. .removeListener(eventName, listener): Removes a specific listener for an event.
    e. .removeAllListeners(eventName): Removes all listeners for an event.

## 7. # V8 JavaScript Engine: Code Execution Phases
![V8 Engine Phases](./v8_phases.png)
### 1. Parsing Stage
- **Lexical Analysis:** V8 reads the JavaScript code and breaks it down into tokens, which are small chunks like keywords, operators, and identifiers.
- **Syntax Analysis:** The tokens are then arranged into a structure called an Abstract Syntax Tree (AST), which represents the code's structure and logic.

### 2. Ignition (Interpreter)
- **Bytecode Generation:** V8 converts the AST into bytecode, a simpler, intermediate form of the code that’s easier to run.
- **Execution:** The Ignition interpreter runs this bytecode directly, allowing the code to start executing quickly, but not yet fully optimized.

### 3. Profiling
- **Hotspot Detection:** As the code runs, V8 watches for parts of the code that are used a lot, called "hot" functions. It gathers data on these parts to decide if they should be optimized.

### 4. TurboFan (Optimizing Compiler)
- **Optimization:** For the frequently used "hot" code, V8 uses the TurboFan compiler to turn the bytecode into highly optimized machine code, making it run much faster.
- **Deoptimization:** If the assumptions used to optimize the code turn out to be wrong (like a variable type changing), V8 can revert the code back to a slower, but safer, execution mode.

### 5. Garbage Collection
- **Memory Management:** V8 regularly cleans up memory by removing data that the program no longer needs, making sure that memory usage stays efficient.

### 6. Final Execution
- **Execution:** The optimized code continues to run efficiently until the program finishes or until changes in the code require adjustments.

This step-by-step process ensures that JavaScript code is executed as quickly and efficiently as possible.
"""
![V8 Engine](./v8_arc.png)



## 8. # Issue with Node js on server HTML and other files
- `Node js` - Node.js server that serves HTML file but the file like for example `css, js` which is linked inside the html won't be served if you don't link it as you did for Html file. This will create an issue where the browser can't load the linked CSS or image files with you main html file, as they’re not being served by the server. Solution is only you have to add the routes same way back for every file which create chaos for bigger application.
- Ome more solution is Express - Express serves both the HTML page and its linked resources without needing additional routing or setup.

```javascript

// 1. HTTP server for serving html file 

const http = require('http');
const {readFileSync, read, readFile} = require('fs')

const homepage = readFileSync('./Home.html')

const server = http.createServer((req, res) => {
    // Home page 
    if ( req.url === '/')
    {
        res.writeHead(200,{'content-type' : 'text/html'})   // Output- the html page will be shown but the css and js, images won't be linked if created externally.
        res.write(homepage)
        // res.write("Homepage")
        res.end("ended");
    }

}

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});
    


// 2. Solution of the above problem 

const homepage = readFileSync('./Home.html')
const homestyles = readFileSync('./asset/style.css')
const homelogo = readFileSync('./asset/logo.jpg')

const server = http.createServer((req, res) => {

    // Home page 
    if ( req.url === '/')
    {
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(homepage)
        res.end("ended home");
    }
    else if(req.url == '/asset/style.css')
    {
        res.writeHead(200,{"content-type" : 'text/css'});
        res.write(homestyles)
        res.end()

    }

    else if(req.url == '/asset/logo.jpg') {
        res.writeHead(200, {'content-type': 'image/jpg'})
        res.write(homelogo)
        res.end()

    }

// Note - When you load an HTML page (like /), your browser might automatically request other resources that are linked inside that HTML page (like CSS files, images, JavaScript, etc.). For example, if your HTML has a reference to a CSS file (e.g., <link rel="stylesheet" href="/asset/style.css">), the browser will automatically send a request to the server to fetch that CSS file in addition to the initial request for the homepage.

});


```