var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json({ Fullname: 'Nonpawit Nittaworn' })
});

router.get('/bio', function (req, res, next) {
  res.status(200).json({
    fullname: 'Nonpawit Nittaworn',
    nickname: 'Tan',
    hobby: 'Sleep',
    gitusername: 'nonpawitJT'
  })
});

module.exports = router;
