const jokes = require("give-me-a-joke");
// console.dir(jokes)
jokes.getRandomDadJoke (function (joke) {
    console.log(joke);
});