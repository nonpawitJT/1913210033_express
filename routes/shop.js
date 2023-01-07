var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

/* GET users listing. */
router.get('/', shopController.index);
router.get('/menu', shopController.menu);
router.get('/:id', shopController.byid);

module.exports = router;
