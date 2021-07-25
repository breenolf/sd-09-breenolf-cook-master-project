const express = require('express');

const { postRecipe } = require('../controllers/recipes');
const validateToken = require('../src/api/auth/validateToken');

const router = express.Router();

router.post('/', validateToken, postRecipe);

module.exports = router;