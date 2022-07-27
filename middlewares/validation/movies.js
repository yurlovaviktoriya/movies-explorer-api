const { celebrate, Joi } = require('celebrate');

const { regexLink } = require('./regex');

const saveMovieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regexLink),
    trailerLink: Joi.string().required().pattern(regexLink),
    thumbnail: Joi.string().required().pattern(regexLink),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required()
  })
});

const movieIdValidator = celebrate({
  body: Joi.object().keys({
    movieId: Joi.number().min(1)
  })
});

module.exports = {
  saveMovieValidator,
  movieIdValidator
};
