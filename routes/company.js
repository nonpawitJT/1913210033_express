var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController');
const { isAdmin } = require('../middleware/checkAdmin');
const passportJWT = require('../middleware/passportJWT')
const checkAdmin = require('../middleware/checkAdmin')
/* GET users listing. */
router.get('/',[passportJWT.isLogin,checkAdmin.isAdmin], companyController.all);
router.get('/:id', companyController.show);
router.delete('/:id', companyController.destroy);
router.post('/', companyController.insert);
router.put('/:id', companyController.update);
module.exports = router;
