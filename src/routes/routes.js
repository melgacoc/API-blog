const { Router } = require('express');
const LogInController = require('../controllers/logInController');
const UserController = require('../controllers/userController');
const CategoriesController = require('../controllers/categoriesController');
// const { categoryValidation } = require('../validations/categoriesValidation');
const { logInValidation } = require('../validations/logInValidation');
const { userValidation } = require('../validations/userValidation');
const validateJWT = require('../middleware/validateJWT');

const router = Router();

router.post('/login', logInValidation, LogInController.logIn);
router.post('/user', userValidation, UserController.addNewUser);
router.post('/categories', validateJWT, CategoriesController.addNewCategory);
router.get('/user', validateJWT, UserController.getAllUsers);
router.get('/user/:id', validateJWT, UserController.getUserById);
router.get('/categories', validateJWT, CategoriesController.getAll);

module.exports = router;