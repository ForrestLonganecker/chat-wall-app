const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validation = require('./validation');


router.get('/users/sign_up', userController.signUp);
router.get('/users/sign_in_form', userController.signInForm);
router.get('/users/sign_out', userController.signOut);

router.post('/users/create', validation.validateUsers, userController.create);
router.post('/users/sign_in', validation.validateUsers, userController.create);

module.exports = router;