// Import the core modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the hostname and port number
const hostname = 'localhost';
const port = 8080;

// Create a server instance using the http module
const server = http.createServer((req, res) => {

  // Routing the URL request
  let fileName;
  switch (req.url) {
    case '/':
      fileName = 'index.html';
      break;
    case '/about':
      fileName = 'about.html';
      break;
    case '/contact':
      fileName = 'contact.html';
      break;

    default:
      fileName = '404.html';
      break;
  }
  const filePath = path.join(__dirname, 'public', fileName);

  // Read the HTML file and serve
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

// Start the server and listen on the specified host name and port
server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
