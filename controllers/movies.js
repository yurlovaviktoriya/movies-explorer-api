const Movie = require('../models/movie');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      res.send(movies);
    }).catch(next);
};

const saveMovie = (req, res, next) => {
  const filmInfo = req.body;
  Movie.create({ ...filmInfo, owner: req.user._id })
    .then((movie) => {
      res.send(movie);
    }).catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then(() => {
      res.send(
        { message: 'Movie was deleted' },
      );
    }).catch(next);
};

module.exports = {
  getMovies,
  saveMovie,
  deleteMovie,
};
