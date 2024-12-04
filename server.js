const http = require("node:http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  const pathName = parsedUrl.pathname;

  if (pathName === "/home" && req?.method === "GET") {
    fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
      if (err) {
        throw new Error("Error reading file");
      }
      res.setHeader("Content-type", "text/html");
      res.statusCode = 200;
      res.end(data);
    });
  } else if (pathName === "/posts" && req?.method === "GET") {
    fs.readFile(__dirname + "/posts.json", "utf-8", (err, data) => {
      if (err) {
        throw new Error("Error reading file");
      }

      const query = parsedUrl.searchParams;
      const postId = query.get("id");
      const expectedPost = JSON.parse(data).find((post) => post.id === postId);

      res.setHeader("Content-type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(expectedPost));
    });

    // const expectedPost = posts.find((post) => post.id == postId)
    // res.writeHead(200, {
    //   "Content-type": "application/json",
    //   email: "galib@gmail.com",
    // });
  } else {
    res.end("Not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is listening on port 5000");
});
