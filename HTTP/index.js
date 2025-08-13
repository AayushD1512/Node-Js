const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res)=> {
    const myUrl = url.parse(req.url, true);
    const path = myUrl.pathname;
    const query = myUrl.query;

    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>Home Page</h1>');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>About Page</h1>');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html;'});
            res.end('<h1>404 Not Found</h1>');
            break;
    }

    fs.appendFile('log.txt', `${Date.now()} ${req.url}: New Request Received\n`, (err)=> {
        if(err) {
            console.error('Error writing to log file:', err);
        }
    });
});


server.listen(8000, ()=> {
    console.log('Server is running on port 8000');
})