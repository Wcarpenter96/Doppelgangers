const router = require('express').Router();
const faceRoutes = require('./faceRoutes')
const authRoutes = require('./authRoutes');

// Every route inside of here
// has /api
router.use('/auth', authRoutes);
router.use('/face', faceRoutes);


module.exports = router;