const http = require("node:http");

const server = http.createServer((req, res) => {
   if(req?.url === "/home" && req?.method === "GET"){
    res.end("This is home data");
   }else if(req?.url === "/posts" && req?.method === "POST"){
    res.end("This is post data");
   }else{
    res.end("Not found")
   }
});

server.listen(5000, "127.0.0.1", () => {
    console.log("server is listening on port 5000" )
})
