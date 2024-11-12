const http = require('http');
const {readFileSync, read, readFile} = require('fs')

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

});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
});