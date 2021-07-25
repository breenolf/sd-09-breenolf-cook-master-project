const express = require('express');

const { postRecipe, getRecipes } = require('../controllers/recipes');
const validateToken = require('../src/api/auth/validateToken');

const router = express.Router();

router.post('/', validateToken, postRecipe);
router.get('/', getRecipes);

module.exports = router;
