const rescue = require('express-rescue');
const UserService = require('../services/users');

const HTTP_STATUS_CREATED = 201;

const postUsers = rescue(async (req, res) => {
  const userPayload = req.body;

  const result = await UserService.createUser(userPayload);

  return res.status(HTTP_STATUS_CREATED).json(result);
});

module.exports = {
  postUsers,
};
