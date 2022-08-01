const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле со страной производства обязательно для заполнения. Получена пустая строка.']
  },
  director: {
    type: String,
    required: [true, 'Поле с режиссёром обязательно для заполнения. Получена пустая строка.']
  },
  duration: {
    type: Number,
    required: [true, 'Поле с длительностью фильма обязательно для заполнения. Получена пустая строка.']
  },
  year: {
    type: String,
    required: [true, 'Поле с годом производства обязательно для заполнения. Получена пустая строка.']
  },
  description: {
    type: String,
    required: [true, 'Поле с описанием обязательно для заполнения. Получена пустая строка.']
  },
  image: {
    type: String,
    required: [true, 'Поле со ссылкой на постер фильма обязательно для заполнения. Получена пустая строка.'],
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'Строка не является форматом url-адреса'
    }
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле со ссылкой на трейлер фильма обязательно для заполнения. Получена пустая строка.'],
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'Строка не является форматом url-адреса'
    }
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле со миниатюрой постера фильма обязательно для заполнения. Получена пустая строка.'],
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'Строка не является форматом url-адреса'
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Автор записи обязателен для заполнения. Получена пустая строка.']
  },
  nameRU: {
    type: String,
    required: [true, 'Поле с названием фильма на русском языке обязательно для заполнения. Получена пустая строка.']
  },
  nameEN: {
    type: String,
    required: [true, 'Поле с названием фильма на английском языке обязательно для заполнения. Получена пустая строка.']
  }
});

module.exports = mongoose.model('movie', movieSchema);
