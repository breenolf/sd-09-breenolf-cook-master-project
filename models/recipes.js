const { ObjectId } = require('mongodb');
const conn = require('./connection');

const createRecipeDB = async (payload, userId) => {
  const db = await conn();
  const resultInsert = await db
    .collection('recipes')
    .insertOne({ ...payload, urlImage: '', userId });
  return { recipe: resultInsert.ops[0] };
};

const getRecipesDB = async () => {
  const db = await conn();
  const recipes = await db.collection('recipes').find().toArray();
  return recipes;
};

const getRecipeByIdDB = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await conn();
  const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });

  return recipe;
};

module.exports = {
  createRecipeDB,
  getRecipesDB,
  getRecipeByIdDB,
};
