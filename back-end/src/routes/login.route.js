const Router  = require('express')

const router = Router();

router.post('/login', loginController.login);

export default router;
