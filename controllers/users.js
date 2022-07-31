const bcrypt = require('bcryptjs');

const User = require('../models/user');

const register = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((data) => {
      res.send({
        name: data.name,
        _id: data._id,
        email: data.email
      });
    }).catch(next);
};

const login = () => {
  console.log('login!');
};

const getCurrentUserInfo = (req, res, next) => {
  User.getById(req.user_id)
    .then((data) => {
      res.send(data);
    }).catch(next);
};

const updateCurrentUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  User.getByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true }
  ).then((data) => {
    res.send(data);
  }).catch(next);
};

module.exports = {
  register,
  login,
  getCurrentUserInfo,
  updateCurrentUserInfo
};
