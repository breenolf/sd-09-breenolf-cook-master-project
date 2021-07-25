const joi = require('joi');

module.exports = joi
  .object({
    name: joi.string().required(),
    ingredients: joi.string().required(),
    preparation: joi.string().required(),
  })
  .messages({
    'any.required': 'Invalid entries. Try again.',
  });
