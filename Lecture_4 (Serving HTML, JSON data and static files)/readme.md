# (A) Serving the Static files like HTML CSS, JSON txt etc. 

1. To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
2. Express provides a built-in middleware, express.static, which allows you to serve static files from a specific folder without manually creating routes for each asset ( it solves the same issue occurred once in node js).
3. Express provides the functionality of Serving these kind of files with the inbuilt middleware which is static()
      eg- exprees.static(root_directory,options) - : root_direcotry is the file / folder name you want to serve , otpional :- is the optional argument used for configuration
    
    ### Syntax
    ```
    1. app.use(express.static('Public')) -  Now, you can load the files that are in the public directory by requesting to this link :  http://localhost:3000/Home.html , http://localhost:3000/style.css .
    
    2. 2nd way to provide path -  However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:
    ```

 