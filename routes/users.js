const router = require('express').Router();

const { updateUserInfoValidator } = require('../middlewares/validation/users');
const { getCurrentUserInfo, updateCurrentUserInfo } = require('../controllers/users');

router.route('/me')
  .get(getCurrentUserInfo)
  .patch(updateUserInfoValidator, updateCurrentUserInfo);

module.exports = router;
