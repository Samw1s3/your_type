const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveMeetup,
  deleteMeetup,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveMeetup);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/meetup/:meetup_id').delete(authMiddleware, deleteMeetup);

module.exports = router;
