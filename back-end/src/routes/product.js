const { Router } = require('express');
const productController = require('../controllers/product');
// const { userMiddleware } = require('../middlewares/validation');

const router = Router();

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.put('/:id', productController.update);

module.exports = router;
