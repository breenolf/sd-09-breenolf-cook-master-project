const rescue = require('express-rescue');
const RecipeService = require('../services/recipes');

const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NO_CONTENT = 204;

const postRecipe = rescue(async (req, res) => {
  const recipePayload = req.body;
  const { _id } = req.user;

  const result = await RecipeService.createRecipe(recipePayload, _id);

  return res.status(HTTP_STATUS_CREATED).json(result);
});

const getRecipes = rescue(async (req, res) => {
  const result = await RecipeService.getRecipes();

  return res.status(HTTP_STATUS_OK).json(result);
});

const getRecipeById = rescue(async (req, res) => {
  const { id } = req.params;

  const result = await RecipeService.getRecipeById(id);
  return res.status(HTTP_STATUS_OK).json(result);
});

const putRecipe = rescue(async (req, res) => {
  const recipePayload = req.body;
  const userParams = req.user;
  const { id } = req.params;

  const result = await RecipeService.editRecipe(recipePayload, userParams, id);

  return res.status(HTTP_STATUS_OK).json(result);
});

const deleteRecipe = rescue(async (req, res) => {
  console.log('111');
  const userParams = req.user;
  const { id } = req.params;

  const result = await RecipeService.deleteRecipe(userParams, id);

  return res.status(HTTP_STATUS_NO_CONTENT).json(result);
});

module.exports = {
  postRecipe,
  getRecipes,
  getRecipeById,
  putRecipe,
  deleteRecipe,
};
