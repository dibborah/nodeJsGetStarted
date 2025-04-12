const http = require('http');

// Start from 2Hr50Min video timestamp 
// Blocking code part
// This file part

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("this is home page");
    };
    if(req.url === '/about') {
        // blocking code
        for(let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} and ${j}`)
            }
        }
        res.end("this is about page!!!");
    };
    res.end("Something went wrong!!!");
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
