var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

const { body } = require('express-validator');

/* GET users listing. */
router.get('/', userController.index);

router.get('/bio',userController.bio );

router.post('/',[
    body('name').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body('email').not().isEmpty().withMessage("กรุณากรอกอีเมล").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณากรอกรหัสผ่าน").isLength({min:5}).withMessage("รหัสผ่านต้องอย่างน้อย5ตัวอักษร"),
], userController.register);

router.post('/login',[
    // body('name').not().isEmpty().withMessage("กรุณากรอกชื่อ-สกุล"),
    body('email').not().isEmpty().withMessage("กรุณากรอกอีเมล").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณากรอกรหัสผ่าน").isLength({min:5}).withMessage("รหัสผ่านต้องอย่างน้อย5ตัวอักษร"),
],userController.login );


module.exports = router;
