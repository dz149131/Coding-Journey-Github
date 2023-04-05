const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utility/catchAsync');
const User = require('../models/user');

router.get('/register', (req, res) => {
	res.render('users/register');
});

router.post(
	'/register',
	catchAsync(async (req, res) => {
		try {
			const { email, username, password } = req.body;
			const user = new User({ email, username });
			const registeredUser = await User.register(user, password);
			req.flash('success', 'Welcome To YelpCamp');
			res.redirect('/campgrounds');
			console.log(registeredUser);
		} catch (e) {
			req.flash('error', e.message);
			res.redirect('register');
		}
	})
);

router.get('/login', (req, res) => {
	res.render('users/login');
});

router.post(
	'/login',
	passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }),
	(req, res) => {
		req.flash('success', 'Welcome Back!');
		res.redirect('/campgrounds');
	}
);

router.get('/logout', (req, res) => {
	req.logout(function (err) {
		if (err) {
			req.flash('error', 'e.message');
		} else {
			req.flash('success', 'Successfully Logged Out!');
			res.redirect('/campgrounds');
		}
	});
});

module.exports = router;
