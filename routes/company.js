var express = require('express');
var router = express.Router();
const userController = require('../controllers/companyController')

/* GET users listing. */
router.get('/', userController.company);

module.exports = router;
