const express = require('express');
const router = express.Router();
const user = require('./user');
const profile = require('./profile');
const home = require('./home');
router.use('/user', user);
router.use('/profile', profile);
router.use('/home', home);
module.exports = router;
