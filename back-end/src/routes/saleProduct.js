const { Router } = require('express');
const saleProductController = require('../controllers/saleProduct');

const router = Router();

router.post('/', saleProductController.create);
router.get('/', saleProductController.getAll);
router.get('/:id', saleProductController.getById);
router.put('/:id', saleProductController.update);
router.delete('/:id', saleProductController.destroy);

module.exports = router;