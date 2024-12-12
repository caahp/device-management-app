const Joi = require('joi');

const CategorySchema = Joi.object({
  name: Joi.string().max(128).required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name cannot be empty.',
    'string.max': 'Name must not exceed 128 characters.',
    'any.required': 'Name is required.',
  }),
});

module.exports = {
  validate: (category) => CategorySchema.validate(category),
};