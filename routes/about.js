var express = require('express')
var router = express.Router();

route.get('/about', function(req, res, next) {
  res.render('about', { about_title: 'About Andrew'});
});

module.exports = router;
