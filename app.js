const express = require('express');
const mongoose = require('mongoose');

const { router } = require('./routes/index');

const { PORT = 3000, DB_PATH, NODE_ENV } = process.env;

const app = express();

mongoose.connect(NODE_ENV !== 'production' ? 'mongodb://localhost:27017/moviesdb' : DB_PATH);

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
