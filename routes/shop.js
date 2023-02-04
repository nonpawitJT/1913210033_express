var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

const { body } = require('express-validator');

/* GET users listing. */
router.get('/', shopController.index);
router.get('/menu', shopController.menu);
router.get('/:id', shopController.byid);

router.post('/', [
    body("name").not().isEmpty().withMessage("กรุณากรอกชื่อร้านค้า"),
    body("location.lat").not().isEmpty().withMessage("กรุณากรอกค่า Lat ").isNumeric().withMessage("Lat ต้องเป็นตัวเลขเท่านั้น"),
    body("location.lgn").not().isEmpty().withMessage("กรุณากรอกค่า Lgn ").isNumeric().withMessage("Lgn ต้องเป็นตัวเลขเท่านั้น"),
], shopController.insert);


module.exports = router;
