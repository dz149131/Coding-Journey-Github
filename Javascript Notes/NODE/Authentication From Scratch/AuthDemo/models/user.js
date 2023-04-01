const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username Cannot Be Empty']
    },
    password: {
        type: String,
        required: [true, 'Username Cannot Be Empty']
    }
})

//Defines a static method called findAndValidate on a Mongoose schema called userSchema.

//The method finds a user document that has the same username as the one passed 
//in as an argument using the findOne method of the Mongoose model.

//The compare method of the bcrypt library is used to compare the password 
//passed in as an argument with the hashed password stored in the user document.

//If the password matches, the method returns the user document, 
//indicating that the user's credentials are valid. Otherwise, it returns false.
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({username});
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;