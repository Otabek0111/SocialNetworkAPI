const router = require('express').Router();
const userRoutes = require('./user.js');
const thoughtRoutes = require('./thought.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
