module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}

//return a function that accepts a function 
//then executes that function 
//then "catches" any errors
//passes it to next() if there is an error