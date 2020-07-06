var express = require('express');
var router = express.Router();

/* GET land page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'uMov.me Callback - History' });
});

module.exports = router;
