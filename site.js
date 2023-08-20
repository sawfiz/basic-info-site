// Import the http module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a server instance using the http module
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send response message
  res.end('Hello World\n');
});

// Start the server and listen on the specified host name and port
server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
