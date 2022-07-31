const Movie = require('../../models/movie');
const ResourceNotFoundError = require('../../errorClasses/ResourceNotFoundError');

module.exports.doesMovieExist = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new ResourceNotFoundError(`Фильм с id ${req.params.movieId} не найден`);
      }
      req.movie = movie;
      next();
    }).catch(next);
};
