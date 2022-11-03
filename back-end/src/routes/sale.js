const { Router } = require('express');
const saleController = require('../controllers/sale');

const router = Router();

router.post('/', saleController.create);
router.get('/', saleController.getAll);
router.get('/seller', saleController.getAllBySellers);
router.get('/customer', saleController.getAllByUsers);
router.get('/:id', saleController.getById);
router.put('/:id', saleController.update);
router.delete('/:id', saleController.destroy);
module.exports = router;