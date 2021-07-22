const joi = require('joi');

module.exports = joi
  .object({
    name: joi.string().required(),
    email: joi.string().email().message('Invalid entries. Try again.').required(),
    password: joi.string().required(),
  })
  .messages({
    'any.required': 'Invalid entries. Try again.',
  });
