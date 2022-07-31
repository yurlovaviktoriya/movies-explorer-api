const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { signupValidator, signinValidator } = require('../middlewares/validation/users');
const { register, login, logout } = require('../controllers/users');
const { auth } = require('../middlewares/auth');

router.use('/signup', signupValidator, register);
router.use('/signin', signinValidator, login);

router.use(auth);

router.use('/signout', logout);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
