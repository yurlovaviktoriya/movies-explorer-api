const winston = require('winston');
const expressWinston = require('express-winston');

module.exports.errorLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: 'error.log',
    }),
  ],
  format: winston.format.json(),
});
