const { Router } = require('express');
const saleController = require('../controllers/sale');

const router = Router();

router.post('/', saleController.create);

module.exports = router;