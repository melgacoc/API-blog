const { Router } = require('express');
const LogInController = require('../controllers/logInController');
const UserController = require('../controllers/userController');
const { logInValidation } = require('../validations/logInValidation');
const { userValidation } = require('../validations/userValidation');
const validateJWT = require('../middleware/validateJWT');

const router = Router();

router.post('/login', logInValidation, LogInController.logIn);
router.post('/user', userValidation, UserController.addNewUser);
router.get('/user', validateJWT, UserController.getAllUsers);

module.exports = router;