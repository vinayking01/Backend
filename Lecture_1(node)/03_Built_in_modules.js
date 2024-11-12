// os - os , path , fs , http


var http = require('http');

http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! <P> Nothing everything is fine</P>');
  res.end();
}).listen(8080);


// fs - modules



