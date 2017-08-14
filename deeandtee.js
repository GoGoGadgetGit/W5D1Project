const moment = require('moment');
console.log(moment().format());
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));


console.log(`It is ${chalk.blue(moment().format())}`);

let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
let currentDayth = moment().format("DDDo");
let currentSeconds = moment().format("s");
let isDaylightSavingsTime = moment().isDST();
let frogYear = moment().isLeapYear();

console.log(`It is ${chalk.blue(currentDate)}`);
console.log(`It is the ${chalk.magenta(currentDayth)} of the year`);
console.log(`It is ${chalk.cyan(currentSeconds)} seconds into the day`);
console.log(`It is ${chalk.green(isDaylightSavingsTime)} that it is Daylight Savings Time`);
console.log(`It is ${chalk.red(frogYear)} that is is a Leap Year`);
