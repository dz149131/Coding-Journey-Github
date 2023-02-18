const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product({name: 'Mountain Bike', price: 599})
    bike.save()
    .then(data => {
        console.log('It Worked')
        console.log(data);
    })
    .catch (err => {
        console.log("Oh No Error")
        console.log(err)
    })