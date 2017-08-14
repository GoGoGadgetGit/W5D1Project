const moment = require('moment');
console.log(moment().format());
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));


console.log(`It is ${chalk.blue(moment().format())}`);

let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
let currentDayth = moment().format();
let currentSeconds = moment().format();
let isDaylightSavingsTime = moment().isDST();
let frogYear = moment().isLeapYear();

console.log(`It is ${chalk.blue(currentDate)}`);
console.log(`It ${chalk.green(isDaylightSavingsTime)}`);
console.log(`It ${chalk.red(frogYear)}`);
