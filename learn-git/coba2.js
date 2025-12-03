const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server Node.js berjalan!");
});

server.listen(3008, () => {
  console.log("Server berjalan di http://localhost:3008");
});
