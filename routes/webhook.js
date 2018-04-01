// multipart/form-data を利用するためのライブラリ
let multer = require('multer');
let upload = multer();

// express
var express = require('express');
var router = express.Router();

// Sendgrid へ送信されたメールを multipart/form-data で受信し、その内容を console へ表示する
router.post('/', upload.fields([]), function (req, res, next) {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
