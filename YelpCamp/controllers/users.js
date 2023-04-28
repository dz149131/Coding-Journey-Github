const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
	res.render('users/register');
};

module.exports.register = async (req, res, next) => {
	try {
		const { email, username, password } = req.body;
		const user = new User({ email, username });
		const registeredUser = await User.register(user, password);
		req.login(registeredUser, (err) => {
			if (err) return next(err);
			req.flash('success', 'Welcome To YelpCamp');
			res.redirect('/campgrounds');
		});
		// console.log(registeredUser);
	} catch (e) {
		req.flash('error', e.message);
		res.redirect('register');
	}
};

module.exports.renderLogin = (req, res) => {
	if (req.query.returnTo) {
		req.session.returnTo = req.query.returnTo;
	}
	res.render('users/login');
};

module.exports.login = (req, res) => {
	req.flash('success', 'Welcome Back!');
	// sets the redirectUrl variable to the value of req.session.returnTo or /campgrounds. req.session.returnTo is a property set by a previous middleware function that saves the URL that the user was trying to access before being redirected to the login page.
	const redirectUrl = res.locals.returnTo || '/campgrounds';
	res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
	req.logout(function (err) {
		if (err) {
			req.flash('error', 'e.message');
		} else {
			req.flash('success', 'Successfully Logged Out!');
			res.redirect('/campgrounds');
		}
	});
};
