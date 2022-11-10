const { Router } = require('express');
const userController = require('../controllers/user');
const { authToken } = require('../utils/authToken');

const router = Router();

router.get('/', authToken, userController.getAll);
router.get('/sellers', userController.getSellers);
router.post('/', userController.create);
router.post('/admin', authToken, userController.create);
router.delete('/admin/:id', authToken, userController.removeUser);

module.exports = router;
