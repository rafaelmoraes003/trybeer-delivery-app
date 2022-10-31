const { Router } = require('express');
const userController = require('../controllers/user');

const router = Router();

router.get('/', userController.getAll);
router.post('/', userController.create);

module.exports = router;
