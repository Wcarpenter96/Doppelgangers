const router = require('express').Router();

const authRoutes = require('./authRoutes');

// Every route inside of here
// has /api
router.use('/auth', authRoutes);


module.exports = router;