const Movie = require('../models/movie');
const isDbError = require('../middlewares/errorProcessing/isDbErrors');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      isDbError(err);
    }).catch(next);
};

const saveMovie = (req, res, next) => {
  const filmInfo = req.body;
  Movie.create({ ...filmInfo, owner: req.user._id })
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      isDbError(err);
    }).catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then(() => {
      res.send(
        { message: 'Movie was deleted' }
      );
    }).catch((err) => {
      isDbError(err);
    }).catch(next);
};

module.exports = {
  getMovies,
  saveMovie,
  deleteMovie
};
