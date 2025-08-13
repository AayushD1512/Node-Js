const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res)=> {
    res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000!");
});