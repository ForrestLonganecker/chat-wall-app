const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');
const validation = require('./validation');

router.get('/posts', postController.index);

router.post('/posts/create', validation.validatePost, postController.create);

module.exports = router;