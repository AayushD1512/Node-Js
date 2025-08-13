const express = require('express');

const app = express();
app.use('/user', (req, res)=> {
    console.log("in the middleware");
    res.send('<h1>Hello from User page.</h1>')
})

app.use('/', (req, res)=>{
    console.log("in the / middleware");
    res.send('<h1>Hi from the home(/)page.</h1>')
})

app.listen(3001);