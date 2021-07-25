// const boom = require('@hapi/boom');
const RecipeSchema = require('../schema/recipe');
const RecipesModel = require('../models/recipes');

// const findUserByEmail = async (email) => {
//   const userExists = await UserModel.getUserByEmail(email);
//   if (userExists) throw boom.conflict('Email already registered');
// };

const createRecipe = async (payload, userId) => {
  const { error } = RecipeSchema.validate(payload);
  if (error) throw error;

  const result = await RecipesModel.createRecipeDB(payload, userId);

  return result;
};

module.exports = {
  createRecipe,
};
