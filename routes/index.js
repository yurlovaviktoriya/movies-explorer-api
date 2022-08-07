const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');
const { signupValidator, signinValidator } = require('../middlewares/validation/users');
const { doesEmailExist } = require('../middlewares/errorProcessing/doesEmailExist');
const { register, login, logout } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { isNotResource } = require('../middlewares/errorProcessing/isNotResource');

router.route('/signup')
  .post(signupValidator, doesEmailExist)
  .post(register);
router.use('/signin', signinValidator, login);

router.use(auth);

router.use('/signout', logout);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('*', isNotResource);

module.exports = router;
