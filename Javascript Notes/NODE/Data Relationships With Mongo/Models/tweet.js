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

const userSchema = new Schema ({
    username: String,
    age: Number
})

const tweetSchema = ({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

//make one user
//make one tweet, set tweet to be "text"
//set tweet to have 'user' property of entire 'User' object
//save both
const makeTweets = async () => {
    // const user = new User({username: 'alberto234', age: 25});
    const user = await User.findOne({username: 'alberto234'})
    const tweet2 = new Tweet({text: 'Another unfamilar ceiling', likes: 230});
    // tweet2.user = user;
    user.save();
    tweet2.save();
}

makeTweets();

//populates 'user' from tweetSchema
const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user')
    console.log(t);
}

findTweet();
