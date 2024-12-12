const Joi = require('joi');

const DeviceSchema = Joi.object({
    categoryId: Joi.number().integer().required().messages({
      'number.base': 'Category ID must be a number.',
      'any.required': 'Category ID is required.',
    }),
    color: Joi.string().max(16).regex(/^[a-zA-Z]+$/).required().messages({
      'string.base': 'Color must be a string.',
      'string.empty': 'Color cannot be empty.',
      'string.max': 'Color must not exceed 16 characters.',
      'string.pattern.base': 'Color must contain only letters.',
      'any.required': 'Color is required.',
    }),
    partNumber: Joi.number().integer().positive().required().messages({
      'number.base': 'Part Number must be a positive integer.',
      'number.positive': 'Part Number must be greater than zero.',
      'any.required': 'Part Number is required.',
    }),
  });
  
  module.exports = {
    validate: (device) => DeviceSchema.validate(device),
  };