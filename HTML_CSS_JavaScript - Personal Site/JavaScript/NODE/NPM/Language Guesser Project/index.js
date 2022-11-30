import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';
const colors = require("colors")
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und'){
    console.log("Error! Enter larger sample text.".red)
} else {
    const language = langs.where("3", langCode);
    console.log(language.name.green)
}