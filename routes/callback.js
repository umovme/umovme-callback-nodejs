var express = require('express');
var router = express.Router();

/* Reading post parameter data from callback  */
router.post('/', function(req, res, next) {
  console.log(`Parameter data => ${req.body.data}`);
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(
    { 
        message : 'ok'
    }
    ));
});

/* Reading post parameter data from callback and getting authorization basic parameter */
router.post('/basic', function(req, res, next) {
  console.log(`Authorization header parameter => ${req.headers.authorization}`)
  console.log(`Parameter data => ${req.body.data}`);
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(
    { 
        message : 'ok'
    }
    ));
});

module.exports = router;
