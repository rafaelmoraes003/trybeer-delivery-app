const { Router } = require('express');
const userController = require('../controllers/user');

const router = Router();

router.get('/', userController.user);

module.exports = router;
