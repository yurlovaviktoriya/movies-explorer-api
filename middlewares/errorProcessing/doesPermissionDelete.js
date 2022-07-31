const ForbiddenError = require('../../errorClasses/ForbiddenError');

module.exports.doesPermissionDelete = (req, res, next) => {
  if (!(String(req.movie.owner) === String(req.user._id))) {
    throw new ForbiddenError('Нельзя удалять фильм, сохранённый другим пользователем. '
      + `Автор записи ${req.card.owner} и текущий пользователь ${req.user._id} не совпадают`);
  }
  next();
};
