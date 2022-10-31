const { Router } = require('express');
const productController = require('../controllers/product');
// const { userMiddleware } = require('../middlewares/validation');

const router = Router();

router.post('/', productController.create);
router.get('/', productController.getAll);

module.exports = router;
