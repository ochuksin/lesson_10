"use strict";
console.log("lesson 9");

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +" - object"); //NaN
console.log(4 + "5"); //45 - string
console.log(4 + +"5"); //9 - number

let incr = 10,
    decr = 10;
    
incr++;
decr--;

console.log(incr);
console.log(decr);

incr = 10;
decr = 10;
++incr;
--decr;

console.log(incr); //тоже самое
console.log(decr); //тоже самое

incr = 10;
decr = 10;
console.log(incr++); //не изменяется
console.log(decr--); //не изменяется

incr = 10;
decr = 10;
console.log(++incr); //изменяется
console.log(--decr); //изменяется

console.log(5 % 2); //возвращает остаток от деления = 1

console.log(2 * 4 == 8); //true
console.log(2 * 4 == '8'); //true
console.log(2 * 4 === '8'); //false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const isChecked = true,
    isClose = false;

console.log(isChecked && !isClose); //false
console.log(isChecked || isClose); //true

console.log(isChecked && !isClose); //true
console.log(isChecked || !isClose); //true

console.log(2 + 2 * 2 === 8); //false
console.log(2 + 2 * 2 != 8); //true

console.log(2 + 2 * 2 !== '6'); //true