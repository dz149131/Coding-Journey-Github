//SEARCH BAR
let formSearch = document.getElementById('search-form');
formSearch.addEventListener('submit', function(e) {
    e.preventDefault();
})
let searchTerm = document.getElementById('search').value;

const search = document.querySelector("#search")
search.addEventListener("input", e => { //WORKON LATER
    const value = e.target.value
    console.log(value)
})
// document.addEventListener('mousemove', (e) => {
//     console.log(e)

//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const anchor = document.getElementById('anchor')
//     const rekt = anchor.getBoundingClientRect();
//     const anchorX = rekt.left + rekt.width / 2;
//     const anchorY = rekt.top + rekt.height / 2;

//     const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

//     console.log(angleDeg)

//     const eyes = document.querySelectorAll('.eye')
//     eyes.forEach(eye => {
//         eye.style.transform = `rotate(${90 + angleDeg}deg)`;
//     })
// })

// function angle(cx, cy, ex, ey){
//     const dy = ey - cy;
//     const dx = ex - cx;
//     const rad = Math.atan2(dy, dx);
//     const deg = rad * 180 / Math.PI;
//     return deg;
// }

// console.log("Hello")
// let rating = 3;
// if (rating === 3){
//     console.log("YOU HAVE PASSED")
// }
// let random = Math.random();
// if (random < 0.5) {
//     console.log("THIS NUMBER IS LESS THEN 0.5")
//     console.log(random)
// }
// if (random > 0.5) {
//     console.log("GREATER THEN 0.5")
//     console.log(random)
// }
// const dayOfWeek = "Holiday";
// if(dayOfWeek === "Monday") {
//     console.log("I Hate MONDAYS")
// } 
// else if (dayOfWeek === "Saturday") {
//     console.log("YAY I LOVE SATURDAY")
// }
// else if (dayOfWeek === "Holiday") {
//     console.log("HOLIDAY!!!")
// }

// 0 - 5 - FREE
// 5 - 18 - CHILD $10
// 17 - 65 - ADULT $20
// 65+ SENIOR $10

// const age = prompt ("ENTER A AGE");
// if (age < 5) {
//     console.log("Get in for free")
// }
// else if (age < 18) {
//     console.log("You need to pay $10")
// }
// else if (age < 65) {
//     console.log("You are an adult you pay $20")
// }
// else if (age === 65) {
//     console.log("You get a senior discount")
// }
// else {
//     console.log("INVALID ENTRY!")
// }

//                 //password must be 6+ characters
// const password = prompt("Enter new password");
// if (password.length >= 6) {
//     if (password.indexOf (' ') === -1) {
//         console.log("valid password")
//     } else {
//         console.log("password cannot contain spaces")
//     }
// } else {
//     console.log("PASSWORD IS TOO SHORT 6+ characters")
// }
//                 //pasword cannot include spaces

                // //using && (logical AND)
// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(" ") === -1){
//     console.log("valid password")
// } else {
//     console.log("incorrect format for password")
// }

                // //using || (logical OR)
// 0 - 5 - FREE
// 5 - 18 - CHILD $10
// 18 - 65 - ADULT $20
// 65+ FREE

// const age = 18;
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free");
// } else if (age >= 5 && age < 18) {
//     console.log("$10")
// } else if (age >= 18 && age < 65) {
//     console.log("$20")
// } else (
//     console.log("Invalid Age")
// )

//                 // //using ! (logical NOT)
// const firstName = prompt("Enter your first name");
// if (!firstName) {
//     prompt("Not valid entry. TRY AGAIN!")
// }

// const age = 18;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You are not a baby or senior");
// }

//                     // //using switch
// const day = 10;
// switch (day) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//     case 7:
//         console.log("WEEKEND");
//         break;
//     default:
//         console.log("ERROR");
// }
// 

// // //                      //Guessing game practice
// let maximum = parseInt(prompt("Enter the maximum number")); //parseInt return a string into a number if it is NaN it returns falsy
// while (!maximum) {                                          //if maximum is not truthy
//     maximum = parseInt(prompt("Enter a valid number"));     // run this code
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1   //"targetNum" = math.floor math.random * maximum + 1
// console.log(targetNum);                                     //print out "targetNum"

// let guess = parseInt(prompt("Enter your first guess"));     //"guess" = user inputed string is converted into a number
// let attempts = 1;                                           //"attempts" equals 1

// while (parseInt(guess) !== targetNum) {                     //if "guess" does not equal "targetNum" return false
//     if(guess === 'q') break;                                //if "guess" is strictly equal to "q" terminate loop
//     attempts ++;                                            //add 1 to "attempts"
//     if (guess > targetNum) {                                //if "guess" is greater then "targetNUM"
//         guess = prompt("Too high. Enter a new number");     //run this code
//     } else {                                                //else
//         guess = prompt("Too low. Enter a new number");      //run this code
//     }
// }
// if (guess === 'q') {                                        //if "guess" is strictly equal to "q"
//     console.log("You have quit")                            //print this out
// } else {                                                    //else
//     console.log(`It took you ${attempts} guesses`)          //print this out
//     console.log("YOU GOT IT RIGHT")                         //print this out
// }


// // //                      //Guessing game practice (REVISED)
// let maximum = parseInt(prompt("Enter the maximum number")); //parseInt return a string into a number if it is NaN it returns falsy
// while (!maximum) {                                          //if maximum is not truthy
//     maximum = parseInt(prompt("Enter a valid number"));     // run this code
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1   //"targetNum" = math.floor math.random * maximum + 1
// console.log(targetNum);                                     //print out "targetNum"

// let guess = prompt("Enter your first guess");               //"guess" = user inputed 
// let attempts = 1;                                           //"attempts" equals 1

// while (parseInt(guess) !== targetNum) {                     //if "guess" does not equal "targetNum" return false
//     if(guess === 'q') break;                                //if "guess" is strictly equal to "q" terminate loop
//     attempts ++;                                            //add 1 to "attempts"
//     if (guess > targetNum) {                                //if "guess" is greater then "targetNUM"
//         guess = prompt("Too high. Enter a new number");     //run this code
//     } else if (guess < targetNum) {                         //otherwise check if "guess" is lesser then "targetNUM" , if true
//         guess = prompt("Too low. Enter a new number");      //run this code
//     } else {                                                //else
//         guess = prompt("Unvalid ENTRY try again");          //run this code
//     }
// }
// if (guess === 'q') {                                        //if "guess" is strictly equal to "q"
//     console.log("You have quit")                            //print this out
// } else {                                                    //else
//     console.log(`It took you ${attempts} guesses`)          //print this out
//     console.log("YOU GOT IT RIGHT")                         //print this out
// }
//

// //                               //Iterating over objects
// const testScores = {
//     danny: 90,
//     leo: 75,
//     richard: 98,
//     lauren: 86,
//     ron: 94,
//     fred: 85,
// }
// let total = 0;
// for (let score of Object.values(testScores)) {
//     total += score;
// }
// //528
// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);
// //88

//                                 //To_do_project
// // tips: while loop while its not = to quit keep looping
// // todos done with array have empty array with variable name "todolist"
// // if it is equal to new list delete or quit prompt them to enter a to do 
// // "new" - ADD A TO DO 
// // "list" - LIST ALL TODOS
// // "delete" - REMOVE SPECIFIC TODO
// // "quit" - QUIT APP
// let userInput = prompt("What would you like to do");            //defined variable with user controlled input
// const list = ["Milk cows", "Take out trash"];                   //defined array named "list"
// while (userInput !== "quit") {                                  //keep looping if "userInput" does not = "quit"
//     if(userInput === "list") {                                  //              if "userInput" = list
//         console.log("**************")                           //print this 
//         for (let i = 0; i <= list.length; i++) {                //iterating over arrays
//             console.log(`${i}: ${list[i]}`)                     //print string template literal of the index and list
//         }
//         console.log("**************")                           //print this
//     } else if (userInput === "new") {                           //              if "userInput" = "new"
//         const newTodo = prompt("Add a todo");                   //user defined input into a new variable named "newTodo"
//         list.push(newTodo);                                     //user defined input pushed into the "list" array
//         console.log(`${newTodo} has been added`)                //print this
//     } else if (userInput === "delete") {                        //              if "userInput" = "delete"
//         const index = parseInt(prompt("Enter index to delete"));//new variable named "index" = retrieves the integer of user inputed string
//         if (!Number.isNaN(index)) {                             //if "index" is a number
//             const deletedIndex = list.splice(index, 1);         //new variable named "deletedIndex" = list.splice(start(index), deleteCount(1)) 
//             console.log(`${deletedIndex[0]} has been deleted`);    //print string template literal of "deletedIndex" has been deleted
//         } else {                                                //
//             console.log("Unknown index")                        // if "index" is NaN print this
//         }
//     }
//     userInput = prompt("What would you like to do");            //LOOP
// }
// console.log("You have quit")                                    //print this if "userInput" = "quit"

                                            //Return practice
// function add (x,y) {                                                //
//     if (typeof x !== "number" || typeof y !== "number") {           //if "x" or "y" does not equal number
//         return false;                                               //return stops execution of function if NaN
//     }                                                               //
//     return x + y;                                                   //will not run if above "return" is false
// }

// function add (x, y) {
//     return x + y;
// }
// =
// const add = function (x, y) {
//     return x + y;
// }

// function callTwice (func) {
//     func();
//     func();
// }
// function rollDie() {
//     const roll = Math.floor(Math.random() * 6)
//     console.log(roll)
// }
// //4
// callTwice(rollDie)
// //2
// //6

// function callTenTimes (f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }
// callTenTimes(rollDie)
// //executes rollDie 10 times


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5) {
//         return function() {
//             console.log("Good function")
//             console.log("You won")
//         }
//     } else {
//         return function() {
//             alert("You died")
//             alert("Try again")
//         }
//     }
// }


//                         //RETURNING FUNCTIONS
// //make function that defines something between min# - max#
// //assign variable to the returned function
// //test
// function makeBetweenFunc (min, max) {       //Defining a function 
//     return function(num){                   //Returns a new function 
//         return num >= min && num <= max;    //Num >= min && num <= max
//     }
// }

// const isChild = makeBetweenFunc(0, 18)      //Assigning a variable to a function
// //isChild(4) = true                         //consoletest
// //isChild(24) = false                       //consoletest
// function(num){                              //What the variable is acting upon
//     return num >= 0 && num <= 18;
// }

// const isAdult = makeBetweenFunc(18, 100)    //Assigning a variable to a function
// //isAdult(15) = false                       //consoletest
// //isAdult(24) = true                        //consoletest
// function(num){                              //What the variable is acting upon
//     return num >= 18 && num <= 100;
// }
// //                          Defining Methods:
// const myMath = {                    //Assinging a variable to a method 
//     PI: 3.14159,                    //myMath.PI = "3.14159"
//     square: function(num){          //myMath.square = (number to run function on)
//         return num * num;           //return (number to run function on) = number * number
//     },                              //commas need to seperate objects
//     cube: function(num){            //myMath.cube = (number to run function on)
//         return num ** 3;            //return (number to run function on) = number to power of 3
//     }
// }

//                     //setTimeout
// console.log("Hello")                    //Print this
// setTimeout(() =>{                       //Set timer
//     console.log("Are you still there?") //Print this after
// }, 3000);                                //3000ms
//                     //setInterval
// const id = setInterval(() => {          //Assigned variable name 
//     console.log(Math.random())          //Print random number
// }, 2000);                               //Every 2000ms
// //clearInterval(id)                     //Stops the function

                        //FILTER EXERCSIE
            //practice(wrong)
// const validUserNames = function (name) {
//     if (name.length < 10) {
//         return name;
//     }
// };

// // const validUserName = userName.filter(name => name.length < 10)

//             //correct
// const validUserNames = (username) => {  //validUserName = parameter function
// const b = username.filter(name => {     //b = parameter.filter(parameter function
//     if (name.length < 10) {             //if parameter.legnth is less then 10
//         return name;                    //return parameter
//     }
// });                                     //)
// return b;                               //return b
// };

//                                     //SOME/ EVERY PRACTICE
// const arrayOfRandomNums = [0, 1, 2, 3, 4, 5, 6, 7]

// const allEvens = arrayOfRandomNums.some(num => num % 2 === 0)       //checks if ONE item passes then return true
// //true
// const allEvens1 = arrayOfRandomNums.every(num => num % 2 === 0)     //checks everything if one isnt true return false
// //false
// console.log('1', allEvens, '2', allEvens1)

//                                     //ARROW FUNCTIONS & 'this'
// const person = {
//     firstName: 'Danial',
//     lastName: 'Zhang',
//     fullName: function () {
//         return `${this.firstName}, ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName())
//         })
//     }
// }

//             //Control
// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides + 1)
// }
//             //Default Parameter
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides + 1)
// }
// //rollDie()
// //number 1-6
// //rollDie(20)
// //number 1-20

// function greet(person, msg = "Hello there", punc = "!!") {
//     console.log(`${msg}, ${person}${punc}`) 
// }
// //greet("Danny")
// //Hello there, Danny!!
// //greet("Danny", "HI",)
// //HI, Danny!!
//                                         //Destructuring Objects
// const user = {
//     email:'dannyz@gmail.com',
//     password:'dannyzpassword',
//     firstName:'Danny',
//     lastName:'Zhang',
//     born:'1998',
//     died:'false',
//     city:'Houston',
//     state:'TX',
// }
//             //Long version
// // const firstName = user.firstName;
// // const lastName = user.lastName;
// // const email = user.email;
//             //Condensed Version
// const { email, firstName, lastName } = user;
// //Referencing (user.born) into the var birthYear / (user.died) into var deathYear
// const { born: birthYear = 'N/A' , died: deathYear } = user;

// //Pull out individual properties
// //Single them out into variables using the same name
// //Assign a new name using : (newVariableName)
// //Assign a fallback or default value
//                                             //Destructuring Params
// const user = {
//     email:'dannyz@gmail.com',
//     password:'dannyzpassword',
//     firstName:'Danny',
//     lastName:'Zhang',
//     born:'1998',
//     died:'false',
//     city:'Houston',
//     state:'TX',
// }

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// //fullName(user)
// //Danny Zhang
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }
// //fullName(user)
// //Danny Zhang
// function fullName({firstName, lastName, born}){
//     return `${firstName} ${lastName} was born in ${born}`
// }
// //fullName(user)
// //Danny Zhang was born in 1998

// const games = [
//     {
//         title: 'The Last of Us 2',
//         score: 7,
//         year: 2022,
//     },
//     {
//         title: 'Dark Souls 3',
//         score: 9,
//         year: 2016,
//     },
//     {
//         title: 'Elden Ring',
//         score: 9,
//         year: 2022,
//     },
//     {
//         title: 'Nioh 2',
//         score: 9.5,
//         year: 2020,
//     },
//     {
//         title: 'God of War',
//         score: 0,
//         year: 2018,
//     }
// ]
// games.filter((games) => games.score >= 8)
// //destructured
// games.filter(({ score }) => score >= 8)

// games.map(games => {
//     return `${games.title} (${games.year}) is rated ${games.score}`
// })
// //destructured
// games.map(({title, year, score}) => {
//     return `${title} (${year}) is rated ${score}`
// })

// const links = document.querySelectorAll('p a')

// for(let link of links){
//     console.timeLog(link.href)
// }

//                                     //appendChild EXAMPLES
// document.createElement('img')               //creates HTML element defined by the tag
// const newImg = document.createElement('img')//setting variable name to newImg
// newImg.src = 'url'                          //setting the img.src to a url
// document.body.appendChild(newImg)           //append to last child of the body
// newImg.classList.add('')                    //adds a specified class to the element

// const newH3 = document.createElement('h3')  //setting variable to a method
// newH3 = '(h3 heading)'                      //creating a "shell"
// //<h3> </h3>
// newH3.innerText = 'new h3 heading'          //filling out the "shell"
// //<h3>new h3 heading</h3>
// document.body.appendChild(newH3)            //assigning where the shell will be placed

//                                     //append EXAMPLE
// const p = document.querySelector('p')       //setting variable name to a method selecting('p')
// p.append('new text', 'new text 2')          //appending multiple strings to the end of selected paragraph

//                                     //prepend EXAMPLE
// const newB = document.createElement('b')    //assigning variable name to a method
// newB.append('HI!!')                         //appends to end of parent element
// p.prepend(newB)                             //appends to the beginning of parent element

//                                     //insertAdjacentElement EXAMPLE
// const h2 = document.createElement('h2')     //variable to method "shell"
// h2.append('new text')                       //filling out "shell"
// const h1 = document.querySelector('h1')     //defining what to attach to
// h1.insertAdjacentElement('afterend', h2)    //insertAdjacentElement(position, element)

//                                     //before / after EXAMPLE
// const h3 = document.createElement('h3')     //creating and defining empty h3 "shell"
// h3.innerText = 'I am h3'                    //filling h3 "shell"
// h1.after(h3)                                //insert h3 after h1
// h1.before(h3)                               //insert h3 before h1

//                                     //Pokemon Sprites Demo
// // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// const container = document.querySelector('#container');
// const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for (let i = 1; i <= 151; i++) {
//     const pokemon  = document.createElement('div');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseUrl}${i}.png`

//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon);
// }

const btn = document.querySelector('#onclickButton')
btn.onclick = function(){
    console.log('you clicked me')
    console.log('it works')
}

function scream(){
    console.log('aaaaaaaaa')
    console.log('stop pressing me')
};
btn.onmouseenter = scream;

// document.querySelector('h1').onclick = function(){
//     alert('you clicked the h1')
// }
// //or
// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1')
// }

const btn3 = document.querySelector('#addEventListenerButton');
btn3.addEventListener('click', function() {
    alert('CLICKED')
})

function shout() {
    console.log("shout")
}
function whisper() {
    console.log("whisper")
}
const swButton = document.querySelector('#addEventListenerButton2');

//Cannot have 2 or more callback functions using this method:
// swButton.onclick = shout;
// swButton.onclick = whisper;

//Runs both callback functions
swButton.addEventListener('click', whisper)
swButton.addEventListener('click', shout)

                                //Random Color Exercise
const colorButton = document.querySelector('#randomColorButton')
colorButton.addEventListener('click', function() {
    const randomColorDiv = document.querySelector('#randomColorDiv')
    const h1 = document.querySelector('#randomColorExerciseH1')
    // const r = Math.floor(Math.random() * 255)
    // const g = Math.floor(Math.random() * 255)
    // const b = Math.floor(Math.random() * 255)
    // const newColor= `rgb(${r}, ${g}, ${b})`
    const newColor = makeRandomColor()
    randomColorDiv.style.backgroundColor = newColor
    h1.innerText = newColor;
})
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return newColor= `rgb(${r}, ${g}, ${b})`
}
                                //The Keyword This & Events
const buttons = document.querySelectorAll('#thisButton')

for(let button of buttons) {
    // button.addEventListener('click', function() {
    //     button.style.backgroundColor = makeRandomColor()
    //     button.style.color = makeRandomColor()
    // })
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('#thisH1')

for(let h1 of h1s) {
    // h1.addEventListener('click', function(){
    //     h1.style.backgroundColor = makeRandomColor()
    //     h1.style.color = makeRandomColor()
    // })
    h1.addEventListener('click', colorize)
}

function colorize(){
    this.style.backgroundColor = makeRandomColor()
    this.style.color= makeRandomColor()
}

document.querySelector('#event_object_btn').addEventListener('click', function (evt) {
    console.log(evt)
})
                                    //KEYBOARD EVENTS
const input = document.querySelector('input');

// input.addEventListener('keydown', function(){
//     console.log("keydown")
// })
// input.addEventListener('keyup', function(){
//     console.log("keyup")
// })
// input.addEventListener('keydown', function(e){
//     console.log(e.key)
//     console.log(e.code)
// })

// window.addEventListener('keydown', function(e){
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log('Up');
//             break;
//         case 'ArrowDown':
//             console.log('Down');
//             break;
//         case 'ArrowRight':
//             console.log('Right');
//             break;
//         case 'ArrowLeft':
//             console.log('Left');
//             break;
//         default:
//             console.log('Ignored')
//     }
// })
                                        //FORM EVENTS
const form = document.querySelector("#eventForm");      //Setting var to selected form
const eventInput = document.querySelector('#eventName') //Setting var to selected input
const eventList = document.querySelector('#eventList')  //Setting var to selected ul
form.addEventListener("submit", function (e) {          //What happens when you submit form
    e.preventDefault();                                 //Stop default submission of form
    const eventName = eventInput.value;                 //Setting var to the input (user inputted) value
    const newLI = document.createElement("li");         //Setting var to an element to create new LI "shell"
    newLI.innerText = eventName;                        //Changing innerText of empty "shell" to (user inputted) value
    eventList.append(newLI);                            //Appending filled "shell" of newLI to ul of eventList
    eventInput.value = "";                              //Make input an empty string
});

                                        //TWITTER FORM PRACTICE
const tweetForm = document.querySelector('#tweetForm');             //Setting var to selected form
const tweetInput = document.querySelector('#tweetInput');           //Setting var to selected input
const tweetsContainer = document.querySelector('#tweets');          //Setting var to selected ul container
tweetForm.addEventListener('submit' , function (e) {                //What happens when you submit form
    e.preventDefault();                                             //Stop default submission of form
    // const usernameInput = document.querySelector('#userInput')   //Setting var to the input (user inputted) user value
    // const tweetInput = document.querySelector('#tweetInput')     //Setting var to the input (user inputted) tweet value
    const usernameInput = tweetForm.elements.username;              //Ordered collection accessing individual input by name (username)
    const tweetInput = tweetForm.elements.tweet;                    //Ordered collection accessing individual input by name (tweet)
    addTweet(usernameInput.value, tweetInput.value);                //FUNCTION()
    usernameInput.value = '';                                       //Make input an empty string
    tweetInput.value = '';                                          //Make input an empty string
});

const addTweet = (username, tweet) => {                             //
    const newTweet = document.createElement('li');                  //Setting var to an element to create new LI "shell"
    const boldTag = document.createElement('b');                    //Setting var to an element to create new b(bold) "shell" | <b> </b>
    boldTag.append(username);                                       //<b>(username)</b>
    newTweet.append(boldTag);                                       //<li><b> </b></li>
    newTweet.append(`- ${tweet}`);                                  //<li><b> (username) </b> -(tweet) </li>
    tweetsContainer.append(newTweet);                               //Appending filled "shell" of newTweet to ul of tweetsContainer
}
                                            //EVENT DELEGATION
tweetsContainer.addEventListener('click' , function (e){
    e.target.nodeName ==='LI' && e.target.remove();
})
                                            //INPUT EVENT
const inputEx = document.querySelector('#inputEx');
const h1Input = document.querySelector('#h1Input')

inputEx.addEventListener('input', function (e){
    console.log('input event')
    h1Input.innerText = inputEx.value
})
                                            //CHANGE EVENT
const changeEx = document.querySelector('#changeEx');
const h1Change = document.querySelector('#h1Change')

changeEx.addEventListener('change', function (e){
    console.log('change event')
    h1Change.innerText = changeEx.value
})

                                            //EVENT BUBBLING
const bubble = document.querySelector('#bubbleColorButton')
const container = document.querySelector('#bubbleContainer')

bubble.addEventListener('click', function (e){
    container.style.backgroundColor = makeRandomColor();
    e.stopPropagation();
})
container.addEventListener('click', function() {
    container.classList.toggle('hide');
})

// const makeRandomColor = () => {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     return newColor= `rgb(${r}, ${g}, ${b})`
// }

                                                        //SCORE KEEPER PRACTICE
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#resetButton')
const winningScoreSelect = document.querySelector('#winningScoreCount')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('loser')
            p2Display.classList.add('winner')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click', reset)
function reset (){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('loser', 'winner')
    p2Display.classList.remove('loser', 'winner')
    p1Button.disabled = false;
    p2Button.disabled = false;
}

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

                                                        //CALL BACK V1
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
//                                                       //CALL BACK V2
// const bgColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }
// bgColorChange('red', 1000, () => {
//     bgColorChange('orange', 1000, () => {
//         bgColorChange('yellow', 1000, () => {
//             bgColorChange('green', 1000, () => {
//                 bgColorChange('blue', 1000, () => {
//                     bgColorChange('indigo', 1000, () => {
//                         bgColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

// searchMoviesApi('The Last of Us', () => {
//     saveToDB(movies, () => {
//         //if ot works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })

                                                // THE CALLBACK VERSION DEMO
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

                                                // THE PROMISE VERSION DEMO
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })
                                        //CREATING PROMISES
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7){
//                 resolve('Success');
//             }
//             reject('Request Error');
//         }, 1000)
//     })
// }
// fakeRequest('/dog/1')
// .then ((data) => {
//     console.log("Done with request")
//     console.log("Data is :", data)
// })
// .catch((err) => {
//     console.log("Error", err)
// })
                                                //PROMISE bgColorChange
// const bgColorChange = (color, delay) => {
//     return new PromiseRejectionEvent((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }
// bgColorChange('red', 1000)
//     .then(() => bgColorChange('orange', 1000))
//     .then(() => bgColorChange('yellow', 1000))
//     .then(() => bgColorChange('green', 1000))
//     .then(() => bgColorChange('blue', 1000))
//     .then(() => bgColorChange('indigo', 1000))
//     .then(() => bgColorChange('violet', 1000))
//                                                 //vs callback
// const bgColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }
// bgColorChange('red', 1000, () => {
//     bgColorChange('orange', 1000, () => {
//         bgColorChange('yellow', 1000, () => {
//             bgColorChange('green', 1000, () => {
//                 bgColorChange('blue', 1000, () => {
//                     bgColorChange('indigo', 1000, () => {
//                         bgColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'password') return 'Successful login'
//     throw 'Invalid Password'
// }
// login('username', 'password')
// .then(msg => {
//     console.log("Logged in")
//     console.log(msg)
// })
// .catch(err => {
//     console.log("Error")
//     console.log(err)
// })
// // return = promise resolved
// // throw = promise rejected
                                    //AWAIT
// async function rainbow () {
//     await bgColorChange('red', 1000)
//     await bgColorChange('orange', 1000)
//     await bgColorChange('yellow', 1000)
//     await bgColorChange('green', 1000)
//     await bgColorChange('blue', 1000)
//     await bgColorChange('indigo', 1000)
//     await bgColorChange('violet', 1000)
// }   

// async function printRainbow() {
//     await rainbow()
//     console.log("End of rainbow")
// }

//                                     //HANDLING ERRORS IN ASYNC FUNCTIONS
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }
// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);
//     } catch (e) {
//         console.log("Caught an error")
//         console.log("error is:", e)
//     }
// }

// //THIS IS A STRING OF JSON (NOT AN OBJECT)
// const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`

// // THIS IS A JS OBJECT
// const parsedData = JSON.parse(data);
//                                             //FETCH
// fetch("https://swapi.dev/api/people/1/")                //send a request to url first then fetch returns a promise 
// .then((res) => {                                        //.then accepts a resolved promise
//     console.log("Resolved", res);                       //print this if resolved
//     return res.json();                                  //similar to JSON.parse/ Returns a promise
// })
// .then((data) => {                                       //.then accepts a resolved promise
//     console.log(data)                                   //print "data" if resolved
//     return fetch ("https://swapi.dev/api/people/2/")    //2nd url request
// })
// .then((res) => {                                        //.then accepts a resolved promise
//     console.log("Second request resolved");             //print this if resolved
//     return res.json();                                  //similar to JSON.parse/ Returns a promise
// })
// .then((data) => {                                       //.then accepts a resolved promise
//     console.log(data)                                   //print "data" if resolved
// })
// .catch(e => {                                           //.catch deals with rejected promises
//     console.log("Error", e);                            //print this if promise is rejected
// });

//                                             //FETCH REFACTORED
// const loadSWPeople = async () => {                                  //async function always returns a promise
//     try {                                                           //The code in the try block is executed first
//         const res = await fetch("https://swapi.dev/api/people/1/"); //The await operator is used to wait for a Promise and get its fulfillment value
//         const data = await res.json()
//         console.log(data);
//         const res2 = await fetch("https://swapi.dev/api/people/2/");
//         const data2 = await res2.json()
//         console.log(data2);
//     } catch (e) {                                                   //and if it throws an exception, catch will be executed.
//         console.log("ERROR", e)
//     }
// };

//                                                     //AXIOS
// const loadSWPeople = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch(e) {
//         console.log("ERROR", e);
//     }
// };

// // loadSWPeople(1)
// // loadSWPeople(5)

                                                //DAD JOKE BUTTON
const jokes = document.querySelector('#jokes');         //selects UL '#jokes'
const jokeBtn = document.querySelector('#jokeBtn')      //selects button '#jokeBtn'

const addNewJoke = async () => {                        //async makes function into promise
    const jokeText = await getDadJoke()                 //wait till getDadJoke() is resolved               
    const newLI = document.createElement('LI');         //creates new Li 'shell'
    newLI.append(jokeText);                             //append 'jokeText' from 'getDadJoke' function
    jokes.append(newLI)                                 //appends to ul #jokes
}

const getDadJoke = async () => {                                            //get joke Text
    try {                                                                   //run this code first
        const config = {headers: { Accept: 'application/json' } }           //?
        const res = await axios.get('https://icanhazdadjoke.com/', config)  //?
        return res.data.joke;                                               //return res.data.joke
    } catch (e) {                                                           //if 'try' is not resolved run this code
        return "No Joke Found"                                              //return this
    }
    
}
jokeBtn.addEventListener('click', addNewJoke)           //when 'jokeBtn' is clicked run 'addNewJoke' function

                                            //TV SHOW SEARCH
const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userSearch = searchForm.elements.query.value;
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearch}`)
    const config = { params: { q: userSearch} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImgs(res.data)
    searchForm.elements.query.value = '';
})

const imgContainer = document.querySelector('#imgContainer')
const makeImgs = (shows) => {
    for(let result of shows){
        if (result.show.image) {
            const img = document.createElement('IMG');
            // img.src = res.data[0].show.image.medium;
            img.src = result.show.image.medium;
            imgContainer.append(img)
        }
    }
}

                                    //PROTOTYPES
String.prototype.yell = function () {
    console.log(this.toUpperCase());
}

                                    //OBJECT ORIENTED PROGRAMMING
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb (r,g,b) {
    return `rgb(${r}, ${g}, ${b})`
}

// hex(235, 18, 18);
// "#eb1212"
// "rgb(235, 18, 18)"

                            //Factory Functions
function makeColor (r, g, b) {          //this function makes an object   
    const color = {};                   //empty object created
    color.r = r;                        //properties added
    color.g = g;                        //properties added
    color.b = b;                        //properties added
    color.rgb = function() {            //this is a method = functions in an object
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {            //this is a method = functions in an object
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;                       //return the object
}
const firstColor = makeColor(35, 255, 150);

                            //Constructor Functions
// // const black = makeColor(0, 0 ,0);
// // black.rgb();//"rgb(0, 0, 0")"
// // black.hex();//"#000000"

// function Color(r, g, b) {
//     const object = {}
//     
//     return object;
// }
// Color(35, 60, 190);
// //returns 'undefined' as it reference  the 'windows object'

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// new Color(35, 60, 190);
// // 1. Creates a blank, plain JavaScript object;
// // 2. Links (sets the constructor of) this object to another object;
// // 3. Passes the newly created object from Step 1 as the this context;
// // 4. Returns this if the function doesn't return its own object.
// Color.prototype.rgb = function() {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function() {
//     const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// Color.prototype.rgba = function(a = 1.0) {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(35, 60, 190);
// //rgb() & hex() defined on 'Prototype' object
// const color2 = new Color(0, 0, 50);

                                //Javascript Classes
class Color {                                   //this function will run whenever you instantiate a 'new' instance of the class
    constructor(r, g, b, name) {
        this.r = r;                             //'this' refers to the individual object
        this.g = g;                             //assigning properties to each color
        this.b = b;                             //not the 'prototype' but the color
        this.name = name;
    }
    innerRGB() {                                //method added to prototype
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){                                      //method added to prototype
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {                             //method added to prototype
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {                                     //method added to prototype
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
const blue = new Color(35, 60, 190, 'blue');
const white = new Color(255, 255, 255, 'white');

//EXTENDS and SUPER KEYWORDS
class Pet {
    constructor(name, age) {
        console.log('in Pet constructor')
        this.name = name;
        this.age = age;
    }
    wants() {
        return `${this.name} wants to be pet`
    }
}
class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        console.log('in Cat constructor')
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'meow';
    }
}
class Dog extends Pet{
    barks() {
        return 'woof!';
    }

}


