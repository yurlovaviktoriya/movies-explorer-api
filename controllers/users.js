const User = require('../models/user');

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
  getCurrentUserInfo,
  updateCurrentUserInfo
};
