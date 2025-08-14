const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res)=> {
    
    res.render('add-product');
    // res.status(200).sendFile(path.join(rootDir, "view", "add-product.html"));
});

router.post('/add-product', (req, res)=> {
    products.push({title : req.body.title})
    res.redirect('/');
});

exports.router = router;
exports.products = products;