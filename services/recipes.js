const boom = require('@hapi/boom');
const RecipeSchema = require('../schema/recipe');
const RecipesModel = require('../models/recipes');

const IMAGE_BASE_URL = 'localhost:3000/src/uploads/';

const createRecipe = async (payload, userId) => {
  const { error } = RecipeSchema.validate(payload);
  if (error) throw error;

  const result = await RecipesModel.createRecipeDB(payload, userId);

  return result;
};

const getRecipes = async () => {
  const result = await RecipesModel.getRecipesDB();

  return result;
};

const getRecipeById = async (id) => {
  const result = await RecipesModel.getRecipeByIdDB(id);
  
  if (!result) throw boom.notFound('recipe not found');

  return result;
};

const editRecipe = async (recipePayload, userParams, recipeId) => {
  const { error } = RecipeSchema.validate(recipePayload);
  if (error) throw error;

  const { _id, role } = userParams;
  const recipe = await RecipesModel.getRecipeByIdDB(recipeId);

  if (!recipe) throw boom.notFound('recipe not found');

  if (_id !== recipe.userId && role === 'user') {
    throw boom.unauthorized('Not authorization or permission');
  }

  const result = await RecipesModel.editRecipeDB(recipePayload, recipeId);
  
  return result;
};

const deleteRecipe = async (userParams, id) => {
  const recipe = await RecipesModel.getRecipeByIdDB(id);
  if (!recipe) throw boom.notFound('recipe not found');
  
  const { _id, role } = userParams;
  if (_id !== recipe.userId && role === 'user') {
    throw boom.unauthorized('Not authorization or permission');
  }

  const result = await RecipesModel.deleteRecipeDB(id);
  return result;
};

const addImage = async (filename, id) => {
  const url = IMAGE_BASE_URL + filename;

  const recipeExists = await RecipesModel.getRecipeByIdDB(id);
  if (!recipeExists) throw boom.notFound('recipe not found');

  const result = await RecipesModel.addImageDB(url, id);

  return result;
};

const getImage = async (filename) => {
  const url = IMAGE_BASE_URL + filename;

  const result = await RecipesModel.getImageDB(url);

  return result;
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipeById,
  editRecipe,
  deleteRecipe,
  addImage,
  getImage,
};
