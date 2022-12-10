var express = require('express');
var router = express.Router();
const userController = require('../controllers/staffController')

/* GET users listing. */
router.get('/', userController.staff);

router.post('/', userController.insert);

module.exports = router;
