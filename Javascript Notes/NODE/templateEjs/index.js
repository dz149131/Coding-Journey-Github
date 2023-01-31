const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Milo', 'Turbo', 'Moose', 'Red'
    ]
    res.render('cats', {cats})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', {...data}); //... = spread open
    } else {
        res.render('notfound', {subreddit}) //another webpage*
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand: num})
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})