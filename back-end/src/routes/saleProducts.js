const { Router } = require('express');
const saleProductsController = require('../controllers/salesProducts');

const router = Router();

router.post('/', saleProductsController.create);
router.get('/', saleProductsController.getAll);
router.get('/:id', saleProductsController.getBySaleId);
router.put('/:id', saleProductsController.update);
router.delete('/:id', saleProductsController.destroy);

module.exports = router;