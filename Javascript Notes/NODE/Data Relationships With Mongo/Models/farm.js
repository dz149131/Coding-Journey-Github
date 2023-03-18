const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO Database CONNECTION SUCCESSFUL")
    })
    .catch(err => {
        console.log("MONGO Database ERROR")
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
})
const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Sugar Baby Melon', price: 11.99, season: 'Fall'},
//     {name: 'Winter Melon', price: 12.25, season: 'Winter'},
// ])

const makeFarm = async () => {
    const farm = new Farm({name: 'Fully Belly Farms', city: 'Alpine, NY'});
    const melon = await Product.findOne({name: 'Goddess Melon'});
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({name: 'Fully Belly Farms'});
    const watermelon = await Product.findOne({name: 'Sugar Baby Melon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

Farm.findOne({name: 'Fully Belly Farms'})
.populate('products')
.then(farm => console.log(farm))