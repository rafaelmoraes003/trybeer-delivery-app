const { Router } = require('express');
const userController = require('../controllers/user');
const { userMiddleware } = require('../middlewares/validation');

const router = Router();

router.get('/', userController.getAll);
router.post('/', userMiddleware, userController.create);

module.exports = router;
