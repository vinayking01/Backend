var user1 = require('./export_modules')

// user1.myname('Lily')

console.log("inside import module")
console.log(user1.name , user1.name2)

var http = require('http');

http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World! <P> Nothing everything is fine</P>');
  res.end();
}).listen(8080);

