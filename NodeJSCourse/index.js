// Tasks to do: 1. Spin up a node.js sriven server (on port 3000)
// 2. Handle two routes: "/" and "/user" where Return some greeting text on "/" and Return a list of dummy users on "/user"
//3. Add a form with "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click
// 4. Add the "/create-user" route and parse the incoming data (i.e the username) and simply lof it to the console.
// do all this without express in palin node.js

const http = require('http');

// Store the name globally so it persists between requests
let storedName = '';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<h1>Greetings</h1>');
        if (storedName) {
            res.write(`<h2>User: ${storedName}</h2>`);
        }

        res.write('<h2>Enter your name</h2>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/user'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');
        res.write('<h1>User List</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log('Username received:', username);
            storedName = username; // Store the name globally
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
    // Handle all other routes
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>404 Not Found</title></head>');
        res.write('<body>');
        res.write('<h1>404 - Page Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
        res.write('<a href="/">Go back to home</a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
})


server.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});