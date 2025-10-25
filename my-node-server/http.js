const http = require("http");
const port = 8000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-type", "text/plain");
    response.end("this is a simple backend server!")
});

server.listen(port, () => {
    console.log(`server running at http:/localhost:${port}/`)
});
// OPERATION:
// C --> Create (POST method)
// R --> Read   (GET method)
// U --> Update (PUT method)
// D --> Delete (DELETE method)

// COMMANDS:
// -->  npm init -y
// -->  npm install express
// -->  npm install nodemon --save-dev
// -->  npm install uuid

// STATUS CODES:
// 200 - OK
// 201 - Created
// 204 - No Content
// 400 - Bad Request
// 404 - Not Found
// 500 - Internal Server Error

// TO RUN THE SERVER:
// -->  nodemon index.js [index.js is the name of the file]
// -->  package.json --> "scripts": { "server": "nodemon index.js" }
// -->  npm run server or yarn server

// MIDDLEWARE:
// app.use(express.json()) --> Middleware for parsing JSON data
// Converts the JSON data into JavaScript object
// for example, { "name": "John" } --> { name: "John" }
