const router = require('express').Router();

const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');

router.route('/')
  .get(getMovies)
  .post(saveMovie);

router.route('/:movieId')
  .delete(deleteMovie);

module.exports = router;
