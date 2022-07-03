const Chalk = require('chalk')

console.log(Chalk.red.underline.inverse('true'));

const validator = require('validator');

const res = validator.isEmail('n@gamail.com')
console.log(res);