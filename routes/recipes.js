const express = require('express');

const { postRecipe, getRecipes, getRecipeById } = require('../controllers/recipes');
const validateToken = require('../src/api/auth/validateToken');

const router = express.Router();

router.post('/', validateToken, postRecipe);
router.get('/:id', getRecipeById);
router.get('/', getRecipes);

module.exports = router;
