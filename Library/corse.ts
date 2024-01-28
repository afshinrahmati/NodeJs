// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
// In Node.js, CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict web pages from making 
// requests to a different domain than the one that served the original page. This security measure helps prevent various types of attacks, 
// such as Cross-Site Request Forgery (CSRF) and leaking sensitive information.
// The cors library in Node.js is a middleware that provides an easy way to handle CORS in web applications. It allows you to 
// configure your server to enable CORS for certain origins, HTTP methods, and headers. By using the cors middleware, you can 
// control which external origins are allowed to access your server's resources.

import * as express from "express";

import cors from "cors";
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1', // Allow requests from this origin
    methods: ['GET', 'POST'],      // Allow only specified methods
    allowedHeaders: ['Content-Type'], // Allow only specified headers
    credentials: true              // Allow credentials (cookies, authorization headers, etc.)
}));


app.get("/", (req, res) => {
    return res.json({
        message: "Afshin",
        age: 19
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});