const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UnauthorizedError = require('../errorClasses/UnauthorizedError');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Поле с электронной почтой обязательно для заполнения. Получена пустая строка.'],
    unique: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Строка не является email-адресом'
    }
  },
  password: {
    type: String,
    required: [true, 'Поле с паролем обязательно для заполнения. Получена пустая строка.'],
    select: false
  },
  name: {
    type: String,
    required: [true, 'Поле с именем обязательно для заполнения. Получена пустая строка.'],
    minlength: [2, 'Имя должно содержать минимум 2 знака. Получена строка: {VALUE}'],
    maxlength: [30, 'Имя должно содержать максимум 30 знаков. Получена строка: {VALUE}']
  }
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Неправильные почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Неправильные почта или пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
