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

// This code sets up a pre-save hook on a Mongoose schema called userSchema. A pre-save hook is a function that is executed before a document is saved to the database.

// The pre method is used to define the hook and takes two arguments: 'save', which indicates that the hook should be triggered before a document is saved, and a callback function that will be executed when the hook is triggered.

// The callback function takes a next parameter, which is a function that must be called when the hook is complete to continue with the saving process.

// In this specific hook, the function checks whether the password field has been modified before saving the document. If it has, the bcrypt library's hash method is called with the password and a salt value of 12 to hash the password. The hashed password is then stored in the password field of the document.

// If the password field has not been modified, the next function is called immediately, and the document is saved without any further modifications.

// This hook ensures that passwords are always hashed before being stored in the database and is a good security measure to protect against password leaks in case the database is compromised.
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;