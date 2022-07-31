const { celebrate, Joi } = require('celebrate');

const { regexLink } = require('./regex');

const signupValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30)
  })
});

const signinValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8)
  })
});

const updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().pattern(regexLink)
  })
});

module.exports = {
  signupValidator,
  signinValidator,
  updateUserInfoValidator
};
