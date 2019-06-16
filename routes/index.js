var express = require('express');
var router = express.Router();

// refers to index controller
let index = require('../controllers/index');
/* GET home page. */
router.get('/', index.index);

module.exports = router;
