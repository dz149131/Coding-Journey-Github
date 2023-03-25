//npm init -y
//npm i Express Mongoose EJS
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const {campgroundSchema} = require('./schemas.js');
const catchAsync = require('./utility/catchAsync');
const ExpressError = require('./utility/ExpressError');
const methodOverride = require('method-override')
const Campground = require('./models/campground');
const Review = require('./models/review');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO Database CONNECTION SUCCESSFUL")
    })
    .catch(err => {
        console.log("MONGO Database ERROR")
        console.log(err)
    })

const app = express();

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const validateCampground = (req, res, next) => {
    const {error} = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds})
}));

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
})
//----------------OLD------------------/
// app.post('/campgrounds', async (req, res, next) => {
//     try{
//         const campground = new Campground(req.body.campground);
//         await campground.save();
//         res.redirect(`/campgrounds/${campground._id}`)
//     } catch (e) {
//         next(e);
//     }
// })

//----------------NEW------------------/
app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
    // if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400)
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}))

app.get('/campgrounds/:id', catchAsync(async(req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', {campground});
}))

app.get('/campgrounds/:id/edit', catchAsync(async(req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', {campground});
}))

app.put('/campgrounds/:id', validateCampground, catchAsync(async(req, res) => {
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))

app.post('/campgrounds/:id/reviews', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

//--------------ERROR HANDLER----------------
app.use((err, req, res, next) => {
    const {statusCode = 500, message = 'Something Went Wrong'} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong'
    res.status(statusCode).render('error', {err});
})

app.listen(3000, () => {
    console.log('Serving on Port 3000')
})