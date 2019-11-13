const router = require('express').Router();
const faceRoutes = require('./faceRoutes')
const authRoutes = require('./authRoutes');
const awsRoutes = require('./awsRoutes');

// Every route inside of here
// has /api
router.use('/auth', authRoutes);
router.use('/face', faceRoutes);
router.use('/aws', awsRoutes);


module.exports = router;