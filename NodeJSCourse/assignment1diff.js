const http = require('http');
const username = ['Ajay','Vijay','Shantanu'];

const server = http.createServer((req,res) => {
   const method = req.method;
   const url = req.url;
   if (url === '/add-user?') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><Title>Add User</Title></Head>');
    res.write('<body>');
    res.write('<h2>Enter User Detail</h2><br>');
    res.write('<Form action="/add-user" method="POST"><input type="text" name="user"><button type="submit">Submit</button></Form>');
    res.write('</body'); 
    return res.end();
   }
   if (url==='/add-user' && method === 'POST') {
      const body = [];
      req.on('data',(chunk) => {
        body.push(chunk);
      })
      return req.on('end', () => {

        const parsedbody = Buffer.concat(body).toString();
        let newuser = parsedbody.split('=')[1];
        username.push(newuser);   
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
      })
   }
   if (url === '/') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><Title>User list </Title></Head>');
    res.write('<body>');
    res.write('<h2>User List Page</h2><br>');
    res.write('<ul>');
    for (let user of username) {
        res.write('<li>');
        res.write(user);
        res.write('</li>');
    }
    res.write('</ul>');
    res.write('<form action="/add-user"><button type="submit">Add User</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end()    
   }

})

server.listen(8000);