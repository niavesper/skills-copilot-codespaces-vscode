// Create web server
// 1. Load the http module
var http = require('http');
// 2. Create a server
http.createServer(function (req, res) {
    // 3. Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 4. Send the response body "Hello World"
    res.end('Hello World\n');
}).listen(8080);
