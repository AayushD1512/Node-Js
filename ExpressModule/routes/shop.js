const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(rootDir, "view", "shop.html"));
});

module.exports = router;