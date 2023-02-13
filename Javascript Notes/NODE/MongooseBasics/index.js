const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
.then (() => {
    console.log("Connection Open")
})
.catch (err => {
    console.log("Error!")
    console.log(err)
})