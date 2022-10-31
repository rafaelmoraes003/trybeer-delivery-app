const { Router } = require('express');
const userController = require('../controllers/user');
const { authToken } = require('../utils/authToken');

const router = Router();

router.get('/', authToken, userController.getAll);
router.post('/', userController.create);

module.exports = router;
