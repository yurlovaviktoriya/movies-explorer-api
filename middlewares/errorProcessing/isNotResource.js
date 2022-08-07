const ResourceNotFoundError = require('../../errorClasses/ResourceNotFoundError');

module.exports.isNotResource = () => {
  throw new ResourceNotFoundError('Сервер не может обработать ваш запрос. По заданному запросу нет ресурсов');
};
