const { Router } = require('express');
const LogInController = require('../controllers/logInController');
const UserController = require('../controllers/userController');
const CategoriesController = require('../controllers/categoriesController');
const PostController = require('../controllers/postController');
// const { categoryValidation } = require('../validations/categoriesValidation');
const { logInValidation } = require('../validations/logInValidation');
const { userValidation } = require('../validations/userValidation');
const { validateJWT, validateUserId } = require('../middleware/validateJWT');

const router = Router();

router.post('/login', logInValidation, LogInController.logIn);
router.post('/user', userValidation, UserController.addNewUser);
router.post('/categories', validateJWT, CategoriesController.addNewCategory);
router.post('/post', validateJWT, PostController.addNewPost);
router.put('/post/:id', validateJWT, validateUserId, PostController.attPost);
router.get('/post/search', validateJWT, PostController.searchByQuery);
router.get('/user/:id', validateJWT, UserController.getUserById);
router.get('/post/:id', validateJWT, PostController.getPostById);
router.get('/user', validateJWT, UserController.getAllUsers);
router.get('/categories', validateJWT, CategoriesController.getAll);
router.get('/post', validateJWT, PostController.getAll);
router.delete('/user/:id', validateJWT, UserController.deleteUser);
router.delete('/post/:id', validateJWT, PostController.deletePost);

module.exports = router;