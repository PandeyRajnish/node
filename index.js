const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf8");
const data =fs.readFileSync("data.json", "utf8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("server started");
  res.setHeader("Dummy", "Dummy Value");
//   res.setHeader("Content-Type", "text/html");
res.setHeader("Content-Type", "application/json");
  res.end(data);
});

server.listen(8080);
