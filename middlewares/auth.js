const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  const { NODE_ENV, JWT_SECRET } = process.env;

  if (!token) {
    throw new Error('Требуется авторизация');
  }
  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'some-dev-secret'
    );
  } catch (err) {
    throw new Error('Требуется авторизация');
  }
  req.user = payload;
  next();
};
