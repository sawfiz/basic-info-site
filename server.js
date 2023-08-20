// Import the core modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Define the hostname and port number
const hostname = 'localhost';
const port = 8080;

// The 404 page
const page404Path = path.join(__dirname, 'public', '404.html');
const page404 = fs.readFileSync(page404Path, (err, data) => {
  if (err) throw err;
  return data;
});

// Create a server instance using the http module
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);

  // Routing the URL request
  let fileName;
  if (q.pathname === '/') {
    fileName = 'index.html';
  } else {
    // remove the '/'
    fileName = q.pathname.slice(1) + '.html';
  }
  const filePath = path.join(__dirname, 'public', fileName);

  // Read the HTML file and serve
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(page404);
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
