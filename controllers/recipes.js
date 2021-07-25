const rescue = require('express-rescue');
const RecipeService = require('../services/recipes');

const HTTP_STATUS_CREATED = 201;

const postRecipe = rescue(async (req, res) => {
  const recipePayload = req.body;
  const userId = req.user;

  const result = await RecipeService.createRecipe(recipePayload, userId);

  return res.status(HTTP_STATUS_CREATED).json(result);
});

module.exports = {
  postRecipe,
};
