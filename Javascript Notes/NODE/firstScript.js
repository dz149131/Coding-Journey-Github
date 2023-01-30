// for (let i = 0; i < 10; i++) {
//     console.log("First script ;repeat 10xs")
// }
                                //args
console.log(process.argv)

const args = process.argv.slice(2);
for(let arg of args) {
    console.log(`Hi there, ${arg}`)
}