const http = require("http");

const data = {
  name: "Rajnish Pandey",
};

const fs = require("fs");

const index = fs.readFileSync("index.html", "utf8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("server started");
  res.setHeader("Dummy", "Dummy Value");
  res.setHeader("Content-Type", "text/html");
  res.end(index);
});

server.listen(8080);
