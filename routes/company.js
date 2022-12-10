var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController')

/* GET users listing. */
router.get('/', companyController.company);
router.get('/:id', companyController.show);
router.delete('/:id', companyController.destroy);
router.post('/', companyController.insert);
router.put('/:id', companyController.update);
module.exports = router;
