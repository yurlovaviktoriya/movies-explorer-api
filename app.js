const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
require('dotenv').config();

const { router } = require('./routes/index');
const setAllowedCors = require('./middlewares/setAllowedCors');
const requestLogger = require('./middlewares/logging/requestLogger');
const errorLogger = require('./middlewares/logging/errorLogger');
const sendResponseWithErrorMessage = require('./middlewares/errorProcessing/sendResponseWithErrorMessage');

const { PORT = 3000, DB_PATH, NODE_ENV } = process.env;

const app = express();
mongoose.connect(NODE_ENV !== 'production' ? 'mongodb://localhost:27017/moviesdb' : DB_PATH);

app.use(setAllowedCors);
app.use(helmet());

app.use(bodyParser.json());
app.use(cookieParser());

app.use(requestLogger);
app.use(router);
app.use(errorLogger);

app.use(errors());
app.use(sendResponseWithErrorMessage);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
