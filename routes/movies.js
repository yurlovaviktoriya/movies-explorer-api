const router = require('express').Router();

const { saveMovieValidator, movieIdValidator } = require('../middlewares/validation/movies');
const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');
const doesMovieExist = require('../middlewares/errorProcessing/doesMovieExist');
const doesPermissionDelete = require('../middlewares/errorProcessing/doesPermissionDelete');

router.route('/')
  .get(getMovies)
  .post(saveMovieValidator, saveMovie);

router.route('/:movieId')
  .delete(movieIdValidator, doesMovieExist, doesPermissionDelete, deleteMovie);

module.exports = router;
