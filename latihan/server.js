const hhtp = require("http");
const port = 3000;

hhtp
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello, World!");
    res.end();
  })
  .listen(port, () => {
    console.log("Server running at /");
  });
