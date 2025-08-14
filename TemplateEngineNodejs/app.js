const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    res.render('index', {pageTitle: 'Add User'});
});

app.get('/users', (req, res)=> {
    res.render('users', {
        pageTitle: 'Users',
        users : users,
        hasUsers : users.length > 0
    });
});

app.post('/add-user', (req, res)=> {
    users.push({name: req.body.username.toLowerCase()});
    res.redirect('/users');
});

app.get((req, res)=> {
    res.render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000, ()=> {
    console.log("Server Running on port 3000 ✅");
});