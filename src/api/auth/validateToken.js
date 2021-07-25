const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
// const UserModel = require('../models/users');

const secret = 'CookmasterProjectT9';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) throw boom.unauthorized('Token not found');

  try {
    const { data: { _id } } = jwt.verify(token, secret);
    req.user = _id;
  } catch (err) {
    throw boom.unauthorized('jwt malformed');
  }

  next();
};
