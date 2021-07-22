const conn = require('./connection');

const createUserDB = async (payload) => {
  const db = await conn();
  const { ops } = await db.collection('users').insertOne({ ...payload });
  const { password, ...restParams } = ops[0];
  restParams.role = 'user';
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
