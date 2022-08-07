const User = require('../../models/user');
const ConflictError = require('../../errorClasses/ConflictError');

module.exports.doesEmailExist = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError(`Пользователь с адресом ${email} уже существует`);
      }
      next();
    }).catch(next);
};
