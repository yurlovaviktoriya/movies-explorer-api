const router = require('express').Router();

const { saveMovieValidator, movieIdValidator } = require('../middlewares/validation/movies');
const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');

router.route('/')
  .get(getMovies)
  .post(saveMovieValidator, saveMovie);

router.route('/:movieId')
  .delete(movieIdValidator, deleteMovie);

module.exports = router;
