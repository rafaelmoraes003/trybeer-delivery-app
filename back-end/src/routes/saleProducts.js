const { Router } = require('express');
const saleProductsController = require('../controllers/salesProducts');

const router = Router();

router.post('/', saleProductsController.create);

module.exports = router;