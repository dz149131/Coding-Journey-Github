const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO Database CONNECTION SUCCESSFUL")
    })
    .catch(err => {
        console.log("MONGO Database ERROR")
        console.log(err)
    })
    
const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random () *20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/random',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolores suscipit accusamus. Sapiente repellendus aperiam nemo debitis minima ut nesciunt amet deleniti esse dicta, repudiandae, autem eaque eligendi fugit vel?',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
}) 