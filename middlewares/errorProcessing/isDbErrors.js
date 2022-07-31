const BadRequestError = require('../../errorClasses/BadRequestError');

module.exports.isDbErrors = (err) => {
  if ('errors' in err) {
    throw new BadRequestError(`Переданы некорректные данные для полей ${Object.keys(err.errors)}. `
      + `Сервер не может обработать запрос. Сообщение ошибки: ${err.message}`);
  }
  return;
};
