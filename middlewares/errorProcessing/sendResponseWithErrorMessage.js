module.exports.sendResponseWithErrorMessage = (err, req, res, next) => {
  if (err) {
    const { statusCode = 500, message } = err;
    res.status(statusCode).send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка. Проверьте URL, корректность данных и '
            + 'повторите запрос. Если ошибка не исчезла, попробуйте обратиться позже'
        : message
    });
  }
  next();
};
