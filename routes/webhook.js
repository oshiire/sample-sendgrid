let multer = require('multer');
let upload = multer();
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', upload.fields([]), function(req, res, next) {
  console.log(req.body);
  res.sendStatus(200);
});

router.get('/', function(req, res, next) {
  res.send('OK');
  console.log(req.body);
});

module.exports = router;
