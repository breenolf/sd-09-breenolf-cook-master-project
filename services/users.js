const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const UserSchema = require('../schema/user');
const UserModel = require('../models/users');

const findUserByEmail = async (email) => {
  const userExists = await UserModel.getUserByEmail(email);
  if (userExists) throw boom.conflict('Email already registered');
};

const validUser = async (email, password) => {
  const user = await UserModel.getUserByEmail(email);
  
  if (!user || user.password !== password) {
    throw boom.unauthorized('Incorrect username or password');
  }

  return user;
};

const createToken = (user) => {
  const secret = 'CookmasterProjectT9';
  const { name, password, ...payloadToken } = user;

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payloadToken }, secret, jwtConfig);
  return token;
};

const createUser = async (payload) => {
  const { error } = UserSchema.validate(payload);
  if (error) throw error;

  await findUserByEmail(payload.email);

  const result = await UserModel.createUserDB(payload);

  return result;
};

const login = async ({ email, password }) => {
  if (!email || !password) throw boom.unauthorized('All fields must be filled');

  const user = await validUser(email, password);

  const result = createToken(user);

  return result;
};

module.exports = {
  createUser,
  login,
};
