const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');


router.get('/', (req, res)=> {

    const products = adminData.products;
    res.status(200).render('shop', {prods: products, docTitle: 'Shop'}); // here shop is auto calling shop.pug
    // res.status(200).sendFile(path.join(rootDir, "view", "shop.html"));
});

module.exports = router;