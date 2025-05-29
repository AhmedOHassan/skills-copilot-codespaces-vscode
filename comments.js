// Create Web Server

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is the comments web server!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});