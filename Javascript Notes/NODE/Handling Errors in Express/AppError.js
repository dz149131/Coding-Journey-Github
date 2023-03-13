class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = AppError;

// This code defines a custom error class AppError that extends the built-in Error class in JavaScript. The AppError class is defined using the class keyword and has a constructor method that takes two parameters: message and status. The super() method is called inside the constructor to call the constructor of the parent class Error. This sets up the message property of the error object.

// The constructor method also sets the message and status properties of the AppError object using this.message = message and this.status = status.

// The module.exports statement at the end of the code exports the AppError class, making it available to other modules in a Node.js application.

// Overall, this code creates a custom error class AppError that can be used to handle specific types of errors in a JavaScript or Node.js application. The message and status properties can be used to provide additional information about the error to the user or developer.