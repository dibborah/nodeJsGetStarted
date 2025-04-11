const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('hello world');
});

server.listen(5000, () => {// This line is saying: Hey event loop just keep listening
// to those incoming requests // .listen() is asynchronous and stays alive
  console.log('Server listening on port: 5000...');
});
