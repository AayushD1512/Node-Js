const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/add-product', (req, res)=> {
    res.status(200).sendFile(path.join(rootDir, "view", "add-product.html"));
});

router.post('/add-product', (req, res)=> {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;