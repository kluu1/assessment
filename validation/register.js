const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = alidateRegisterInput = (data) => {
  const errors = {};

  // Checks if data is undefined or null,
  // If undefined or null, set data to ''
  data.username = !isEmpty(data.username) ? data.username : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.plan = !isEmpty(data.plan) ? data.plan : '';

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.username = 'username must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'username field is required';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (Validator.isEmpty(data.plan)) {
    errors.plan = 'Plan field is required';
  }

  // Validate plan input
  switch (data.plan) {
    case 'basic':
      break;
    case 'plus':
      break;
    case 'premium':
      break;
    default:
      errors.plan = 'Must be basic, plus, or premium';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
