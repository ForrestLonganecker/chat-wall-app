const express = require('express');
const router = express.Router();
staticController  = require('../controllers/staticController');

router.get('/', staticController.index);

module.exports = router;