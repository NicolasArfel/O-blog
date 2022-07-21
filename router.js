const express = require('express');
const router = express.Router();
const controller = require('./app/controllers');

router.get('/', controller.home);

router.get('/article/:id', controller.article);

router.get('/categories/:category', controller.category);


module.exports = router;