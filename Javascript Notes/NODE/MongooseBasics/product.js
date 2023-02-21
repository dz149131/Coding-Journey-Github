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
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0 
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L' ]
    }
});

// productSchema.methods.greet = function() {
//     console.log("Hello! HI!")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function() {  //A method that toggles onSale property for the specified product 
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) { //A method that adds a new category for the specified product
    this.categories.push(newCat);
    return this.save();
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
    // foundProduct.greet();
    // foundProduct.onSale = !foundProduct.onSale
    // foundProduct.save()
}

findProduct();



// const bike = new Product({name: 'Cycling Jersy', price: 20.99, categories: ['Cycling'], size: 'XS'})
// bike.save()
// .then(data => {
//     console.log('It Worked')
//     console.log(data);
// })
// .catch (err => {
//     console.log("Oh No Error")
//     console.log(err)
// })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: 10.99}, {new: true, runValidators: true})
//     .then(data => {
//         console.log('It Worked')
//         console.log(data);
//     })
//     .catch (err => {
//         console.log("Oh No Error")
//         console.log(err)
//     })