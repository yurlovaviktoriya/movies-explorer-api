const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const login = (req, res, next) => {
  const { email, password } = req.body;
  const { NODE_ENV, JWT_SECRET } = process.env;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'some-dev-secret',
        { expiresIn: '7d' }
      );
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
        // domain: 'yurlova.nomoredomains.xyz'
      }).send({
        _id: user._id,
        email: user.email,
        name: user.name
      });
    }).catch((err) => {
      res.clearCookie('jwt');
      next(err);
    });
};

const logout = (req, res) => {
  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    // domain: 'yurlova.nomoredomains.xyz'
  }).send({ message: 'Выполнен выход из приложения' });
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
  logout,
  getCurrentUserInfo,
  updateCurrentUserInfo
};
