const express = require('express');

const {
  postRecipe,
  getRecipes,
  getRecipeById,
  putRecipe,
  deleteRecipe,
} = require('../controllers/recipes');
const validateToken = require('../src/api/auth/validateToken');

const router = express.Router();

router.post('/', validateToken, postRecipe);
router.put('/:id', validateToken, putRecipe);
router.delete('/:id', validateToken, deleteRecipe);
router.get('/:id', getRecipeById);
router.get('/', getRecipes);

module.exports = router;
