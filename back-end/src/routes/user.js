const { Router } = require('express');
const user = require('../controllers/user');

const router = Router();

router.get('/', user.userController);

module.exports = router;
