// Import the core modules
const http = require('http');
const fs = require('fs')
const path = require('path')

// Define the hostname and port number
const hostname = 'localhost';
const port = 8080;

// Create a server instance using the http module
const server = http.createServer((req, res) => {
  // Check if the requested URL is the root path
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'public', 'index.html')
    // Read the index.html file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain')
        res.end('Internal Server Error')
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      }
    })
  } else {
    // Handle other URLs
    res.statusCode = 404;
    res.setHeader = ('Content-Type', 'text/plain')
    res.end('404 Not Found')
  }

});

// Start the server and listen on the specified host name and port
server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
