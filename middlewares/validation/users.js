const { celebrate, Joi } = require('celebrate');

const { regexLink } = require('./regex');

const updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().pattern(regexLink)
  })
});

module.exports = {
  updateUserInfoValidator
};
