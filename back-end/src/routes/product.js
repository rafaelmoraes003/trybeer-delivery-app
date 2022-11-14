const { Router } = require('express');
const productController = require('../controllers/product');

const router = Router();

router.get('/', productController.getAll);

module.exports = router;
