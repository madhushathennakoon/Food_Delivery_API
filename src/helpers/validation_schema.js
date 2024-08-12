const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().min(3).max(50).alphanum().required().messages({
    "any.required": "User name is required.",
    "string.empty": "User name cannot be empty.",
    "string.min": "User name should be at least 3 characters long.",
    "string.max": "User name should not exceed 50 characters.",
    "string.alphanum":
      "User name should only contain alphanumeric characters.(letters and numbers)",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Invalid email format.",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
      "string.pattern.base":
        'Password must contain only letters, numbers, or "@" and be between 3 and 30 characters long.',
    }),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Invalid email format.",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
      "string.pattern.base":
        'Password must contain only letters, numbers, or "@" and be between 3 and 30 characters long.',
    }),
});

const addNewFoodSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "any.required": "Food name is required.",
    "string.empty": "Food name cannot be empty.",
    "string.min": "Food name should be at least 3 characters long.",
    "string.max": "Food name should not exceed 50 characters.",
  }),
  desc: Joi.string().min(10).max(90).required().messages({
    "any.required": "Description is required.",
    "string.empty": "Description cannot be empty.",
    "string.max": "Description should not exceed 90 characters.",
    "string.min": "Description should be at least 10 characters long.",
  }),
  category: Joi.string().min(3).max(10).required().messages({
    "any.required": "category is required.",
    "string.empty": "category cannot be empty.",
    "string.max": "category should not exceed 10 characters.",
    "string.min": "category should be at least 3 characters long.",
  }),
  price: Joi.number().positive().required().messages({
    "any.required": "price is required.",
    "number.empty": "price cannot be empty.",
    "number.base": "Price must be a number.",
    "number.positive": "Price must be a positive number.",
  }),
  imageUrl: Joi.string().messages({
    // "any.required": "Image URL is required.",
    // "string.empty": "imageUrl cannot be empty.",
    "string.base": "Image URL must be a string.",
  }),
});

const updateFoodSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "any.required": "Food name is required.",
    "string.empty": "Food name cannot be empty.",
    "string.min": "Food name should be at least 3 characters long.",
    "string.max": "Food name should not exceed 50 characters.",
  }),
  desc: Joi.string().min(10).max(90).required().messages({
    "any.required": "Description is required.",
    "string.empty": "Description cannot be empty.",
    "string.max": "Description should not exceed 90 characters.",
    "string.min": "Description should be at least 10 characters long.",
  }),
  category: Joi.string().min(3).max(10).required().messages({
    "any.required": "category is required.",
    "string.empty": "category cannot be empty.",
    "string.max": "category should not exceed 10 characters.",
    "string.min": "category should be at least 3 characters long.",
  }),
  price: Joi.number().positive().required().messages({
    "any.required": "price is required.",
    "number.empty": "price cannot be empty.",
    "number.base": "Price must be a number.",
    "number.positive": "Price must be a positive number.",
  }),
  imageUrl: Joi.string().required().messages({
    "any.required": "Image URL is required.",
    "string.empty": "imageUrl cannot be empty.",
    "string.base": "Image URL must be a string.",
  }),
});

// .uri({ scheme: ["http", "https"] })
// "string.uri": "Image URL must be a valid URI.",
module.exports = {
  addNewFoodSchema,
  updateFoodSchema,
  signupSchema,
  signinSchema,
};
