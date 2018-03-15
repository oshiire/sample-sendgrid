var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('OK');
  console.log(req);
});

router.get('/', function(req, res, next) {
  res.send('request OK');
  console.log(req);
});

module.exports = router;
