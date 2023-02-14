const { Router } = require('express');
const LogInController = require('../controllers/logInController');
const UserController = require('../controllers/userController');
const { logInValidation } = require('../validations/logInValidation');
const { userValidation } = require('../validations/userValidation');

const router = Router();

router.post('/login', logInValidation, LogInController.logIn);
router.post('/user', userValidation, UserController.addNewUser);

module.exports = router;