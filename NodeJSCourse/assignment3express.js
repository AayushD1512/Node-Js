const express = require('express');
 
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', (req, res)=>{
    res.sendFile(path.join(__dirname, "main2.html"));
})


app.use('/', (req, res)=> {
    res.sendFile(path.join(__dirname, "main.html"));
})

app.listen(3000);

