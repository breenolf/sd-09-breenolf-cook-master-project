const boom = require('@hapi/boom');
const UserSchema = require('../schema/user');
const UserModel = require('../models/users');

const findUserByEmail = async (email) => {
  const userExists = await UserModel.getUserByEmail(email);
  if (userExists) throw boom.conflict('Email already registered');
};

const createUser = async (payload) => {
  const { error } = UserSchema.validate(payload);
  if (error) throw error;

  await findUserByEmail(payload.email);
  
  const result = await UserModel.createUserDB(payload);

  return result;
};

module.exports = {
  createUser,
};
