const { Router } = require('express');
const loginController = require('../controllers/login');

const router = Router();

router.post('/', loginController.login);

module.exports = router;
