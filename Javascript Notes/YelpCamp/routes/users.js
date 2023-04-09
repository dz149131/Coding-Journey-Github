const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utility/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const { checkReturnTo } = require('../middleware');

router.get('/register', users.renderRegister);

router.post('/register', catchAsync(users.register));

router.get('/login', users.renderLogin);

router.post(
	'/login',
	checkReturnTo,
	passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
	users.login
);

router.get('/logout', users.logout);

module.exports = router;
