const bcrypt = require('bcrypt');


//OLD
const hashPassword = async(pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}
//NEW
// const hashPassword = async(pw) => {
//     const hash = await bcrypt.hash(pw, 12);
//     console.log(hash);
// }

const login = async(pw, hashedPassword) => {
    const result = await bcrypt.compare(pw, hashedPassword);
    if(result) {
        console.log("Successfully Logged In!")
    } else {
        console.log("Try Logging In Again.")
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$nHjerk.i9.QXiCyANtEnVOFmGczJVDDAc2mgoR9rI/9qXwOEeHhEe')