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
  const recipe = await db.collection('recipes').findOne(ObjectId(id));

  return recipe;
};

const editRecipeDB = async (payload, id) => {
  const { name, ingredients, preparation } = payload;
  if (!ObjectId.isValid(id)) return null;
  
  const db = await conn();
  await db
    .collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, ingredients, preparation } });

  const recipeEdited = await getRecipeByIdDB(id);
  return recipeEdited;
};

module.exports = {
  createRecipeDB,
  getRecipesDB,
  getRecipeByIdDB,
  editRecipeDB,
};
