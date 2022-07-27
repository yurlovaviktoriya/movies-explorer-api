const router = require('express').Router();

const { getCurrentUserInfo, updateCurrentUserInfo } = require('../controllers/users');

router.route('/me')
  .get(getCurrentUserInfo)
  .patch(updateCurrentUserInfo);

module.exports = router;
