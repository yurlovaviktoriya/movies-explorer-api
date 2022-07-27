const { celebrate, Joi } = require('celebrate');

const updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30)
  })
});

module.exports = {
  updateUserInfoValidator
};
