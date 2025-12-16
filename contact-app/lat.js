const http = require("http");
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("error Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

// res.writeHead(200, { "Content-Type": "text/html" });
// if (url === "/about") {
//   renderHTML("about.html", res);
// } else if (url === "/contact") {
//   renderHTML("contact.html", res);
// } else {
//   renderHTML("index.html", res);
// }

http
  .createServer((req, res) => {
    const url = req.url;
    //ini kalo pake if else
    // if (url === "/about") {
    //   renderHTML("about.html", res);

    // } else if (url === "/contact") {
    //   renderHTML("contact.html", res);
    // } else {
    //   renderHTML("index.html", res);
    // }
    //ini kalo pake switch case
    switch (url) {
      case "/about":
        renderHTML("about.html", res);
        break;

      case "/contact":
        renderHTML("contact.html", res);
        break;

      case "/404":
        renderHTML("404.html", res);
        break;

      default:
        renderHTML("index.html", res);
        break;
    }
  })
  .listen(3002, () => {
    console.log("Server running at http://localhost:3002/");
  });
