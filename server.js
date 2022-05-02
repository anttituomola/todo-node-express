const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;
const todos = []

const todo = "HEllo"

const server = http.createServer(async (req, res) => {
    //set the request route
    if (req.url === "/todo" && req.method === "POST") {
        //response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        todos.push(todo)
        res.write("Todo added");
        //end the response
        res.end();
    }

    //set the request route
    else if (req.url === "/todo" && req.method === "GET") {
        //response headers
        res.writeHead(200, { "Content-Type": "application/json" });
        //set the response
        res.write(JSON.stringify(todos));
        //end the response
        res.end();
    }

    // If no route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found Antti" }));
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

