const { Router } = require('express');
const saleController = require('../controllers/sale');
const { auth } = require('../middlewares/auth');

const router = Router();

router.post('/', auth, saleController.create);
router.get('/', saleController.getAll);
router.get('/seller', saleController.getAllSellers);
router.get('/customer', saleController.getAllUsers);
router.get('/:id', saleController.getById);
router.put('/:id', saleController.update);
router.delete('/:id', saleController.destroy);
module.exports = router;