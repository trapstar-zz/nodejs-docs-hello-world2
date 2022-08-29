const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! - NORTH");
});

const port = process.env.PORT || 1337;
server.listen(port);
// the hello world program
document.write('Hello, World! NORTH')

console.log("Server running at http://localhost:%d", port);
