const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// console.log(fs)

                                    //asynchronous version
// fs.mkdir('Folder', { recursive: true }, (err) => {
//     console.log('In the callback')
//     if (err) throw err;
// });
// console.log('I come after MKDIR in the file')

                                    //synchronous version
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/styles.css`)
} catch (e) {
    console.log("something went wrong");
    console.log(e);
}
//FUNCTION: make new directory to hold new .html, .ccs, and .js

