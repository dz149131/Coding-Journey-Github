const mongoose = require('mongoose');

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
// module.exports = mongoose.model('User', userSchema);

const User = mongoose.model('User', userSchema);

module.exports = User;