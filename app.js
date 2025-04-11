const http = require('http');

const server = http.createServer((req, res) => { // req => incoming request // res => what we are sending back
    if (req.url === '/') {
        res.end('Welcome to the home page!!!');
    }
    if (req.url === '/about') {
        res.end('Welcome to the about page!!!');
    }
    res.end(`
        <h1>Ooops!!!</h1>
        <p>Some went wrong</p>
        <a href="/">Back to home</a>
        `
    )
    // console.log(req);
    // res.write('Welcome to our home page');
    // res.end();
});

server.listen(5000);
