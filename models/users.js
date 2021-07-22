const conn = require('./connection');

const createUserDB = async (payload) => {
  const db = await conn();
  const user = payload;
  user.role = 'user';
  const { ops } = await db.collection('users').insertOne({ ...user });
  const { password, ...restParams } = ops[0];
  return { user: restParams };
};

const getUserByEmail = async (email) => {
  const db = await conn();
  const result = await db.collection('users').findOne({ email });
  return result;
};

module.exports = {
  createUserDB,
  getUserByEmail,
};
