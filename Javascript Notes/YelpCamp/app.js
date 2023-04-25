//npm init -y
//npm i Express Mongoose EJS
// if (process.env.NODE_ENV !== 'production') {
// 	require('dotenv').config();
// }
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utility/ExpressError');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

const mongoSanitize = require('express-mongo-sanitize');

const userRoutes = require('./routes/users');
const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews');

mongoose.set('strictQuery', false);
mongoose
	.connect('mongodb://127.0.0.1:27017/yelp-camp', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MONGO Database CONNECTION SUCCESSFUL');
	})
	.catch((err) => {
		console.log('MONGO Database ERROR');
		console.log(err);
	});

const app = express();

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mongoSanitize());

const sessionConfig = {
	name: 'session',
	secret: 'sessionsecret',
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		// secure: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
//serializeUser() Generates a function that is used by Passport to serialize users into the session
passport.deserializeUser(User.deserializeUser());
//deserializeUser() Generates a function that is used by Passport to deserialize users into the session

app.use((req, res, next) => {
	//The middleware function first checks if the URL requested by the client is not /login or / (home page). If the requested URL is not one of these two URLs, it sets the returnTo property of the req.session object to the requested URL.
	if (!['/login', '/'].includes(req.originalUrl)) {
		req.session.returnTo = req.originalUrl;
	}
	// console.log(req.query);
	// console.log(req.session);
	res.locals.currentUser = req.user;
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	next();
});

app.get('/fakeUser', async (req, res) => {
	const user = new User({
		email: 'randomEmail@gmail.com',
		username: 'hiImbob123',
	});
	const newUser = await User.register(user, 'password');
	res.send(newUser);
});

app.use('/', userRoutes);
app.use('/campgrounds', campgroundRoutes);
app.use('/campgrounds/:id/reviews', reviewRoutes);

app.get('/', (req, res) => {
	res.render('home');
});

app.all('*', (req, res, next) => {
	next(new ExpressError('Page Not Found', 404));
});

//--------------ERROR HANDLER----------------
app.use((err, req, res, next) => {
	const { statusCode = 500, message = 'Something Went Wrong' } = err;
	if (!err.message) err.message = 'Oh No, Something Went Wrong';
	res.status(statusCode).render('error', { err });
});

app.listen(3000, () => {
	console.log('Serving on Port 3000');
});
