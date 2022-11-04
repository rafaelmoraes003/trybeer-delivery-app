const { Router } = require('express');
const saleProductController = require('../controllers/saleProduct');

const router = Router();

router.post('/', saleProductController.create);

module.exports = router;