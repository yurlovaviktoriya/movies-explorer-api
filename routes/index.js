const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { signupValidator, signinValidator } = require('../middlewares/validation/users');
const { register, login } = require('../controllers/users');

router.use('/signup', signupValidator, register);
router.use('/signin', signinValidator, login);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
