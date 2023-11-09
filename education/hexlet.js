// function multiply(num1, num2) {
//   return num1 * num2;
// }

// var result = multiply(6, 7);

// console.log("The result of multiply:" + result);

// const maxNumber = Math.pow(10, 1000); // Max positive number

// if (maxNumber === Infinity) {
//   console.log("Let's call it Infinity!");
//   // Expected output: "Let's call it Infinity!"
// }

// console.log(1 / maxNumber);
// // Expected output: 0

// console.log(Infinity); /* Infinity */
// console.log(Infinity + 1); /* Infinity */
// console.log(Math.pow(10, 1000)); /* Infinity */
// console.log(Math.log(0)); /* -Infinity */
// console.log(1 / Infinity); /* 0 */
// console.log(1 / 0); /* Infinity */

// NaN === NaN; // false
// Number.NaN === NaN; // false
// isNaN(NaN); // true
// isNaN(Number.NaN); // true
// Number.isNaN(NaN); // true

// function valueIsNaN(v) {
//   return v !== v;
// }
// valueIsNaN(1); // false
// valueIsNaN(NaN); // true
// valueIsNaN(Number.NaN); // true

// //begin
// const weight = 65;
// const c = 300000000;
// const energy = weight*c*c;
// console.info(`Your body energy is ${energy} joules. This is 1 / ${Math.round(389000000000000000000 / energy)} of the yearly world energy consumption. Woah!`);
// //end

// const surfaceAreaCalculator = (radius) => {
//     return 4 * 3.14 * radius * radius;
//   }
  
//   const surfaceOfMars = surfaceAreaCalculator(3390);
// console.log(surfaceAreaCalculator(3390));

// // Способы записи функций
// const identity_1 = (value) => {
//     return value
// }

// const identity_2 = value => value;
// // В коде выше мы опустили фигурные скобки и слово return. Заодно мы опустили скобки вокруг аргумента — это можно делать только если у функции один аргумент.

// // Устаревший синтаксис, предпочтительным является () => {}. Кроме синтаксической разницы есть и семантическая.
// // Она связана с пока не изученной темой this.
// const identity_3 = function(value) {
//     return value
// } // Так же можно определять функции используя ключевое слово function:

// //или

// // Такую функцию можно использовать до ее определения (в этом же файле).
// function identity(value) {
//     return value
// }

// const name = 'Alex;'
// const age = 22;
// console.log('His name is ' + name + '\nand his age ' + age);

// const skip = (str) => {
//   let i = 0;
//   let result = '';

//   while (i < str.length) {
//     result = result + str[i];
//     i = i + 2;
//   }
//   return result;
// }
// console.log(skip('hexlet'))

// const name = 'Alex;'
// const a = 10;
// const b = 12;
// console.log(`His name was ${name} and his age was ${a + b}`);

// const name = 'JavaScript';
// const version = '5';

// const result = `${name[0]} - ${name}, ${version}.`;
// console.log(result)

// Операторы инкрементирования и декрементирования:

// // Postfix
// let a = 3;
// let b;
// b = a++;    // b = 3, a = 4

// let a1 = 3;
// let b1;
// b1 = ++a1;    // b = 4, a = 4

// const factorial1 = (n) => {
//   let result = 1;

//   for (let counter=1; counter <=n;counter++) {
//     result *= counter;
//   }

//   return result;
// }
// console.log(factorial1(4))

// // отличие let от const
// const factorial2 = (n) => {
//   let counter = 1;

//   for (;;) {
//     if (counter <= n) break;
//     counter *= 8;
//     counter++;
//   }

//   return counter;
// }
// console.log(factorial2(4))

// // switch
// // обычное условие
// let answer;

// if (num === 1) {
//   answer = 'One';
// } else if (num === 2) {
//   answer = 'Two';
// } else {
//   answer = 'nothing';
// }
// // switch
// switch(num) {
//   case 1:
//     answer = 'One';
//     break;

//   case 2:
//     answer = 'Two';
//     break;

//   default:
//     answer = 'Nothing';
//     break;
// }

// switch(num) {
//   case 1:  // if (num === 1)
//     answer = "One";
//     break;

//   case 2:  // if (num === 2)
//   case 3:  // if (num === 3)
//   case 4:  // if (num === 4)
//     answer = "Two to four";
//     break;

//   default:
//     answer = "Nothing";
//     break;
// }

// b *= a;    // same as b = b * a
// b += a;    // same as b = b + a
// b -= a;    // same as b = b - a 
// b %= a;    // same as b = b % a

// // increment
// let x = 45;
// let height = x++; // height = 45
// x = --height; // x = height - 1

//a = a - (8-a)
//a = 2a -8
// -a = -8
// a = 8

// let b = 10;
// b = b + (b ** 2 > 20 ? 1 : 10);
// console.log(b)

// b = b + (question ? 1 : 10);

// switch(num) {
//   case 1:  // if (num === 1)
//     answer = "One";
//     break;

//   case 2:  // if (num === 2)
//   case 3:  // if (num === 3)
//   case 4:  // if (num === 4)
//     answer = "Two to four";
//     break;

//   default:
//     answer = "Nothing";
//     break;
// }

// const factorial1 = (n) => {
//   let result = 1;
//   for (let counter=1; counter <=n;counter++) {
//     result *= counter;
//   }
//   return result;
// }
// console.log(factorial1(4))

// const isPrime = (num) => {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     if ((num % i) === 0) {
//      return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(4.4));

// assert(square(2) === 4);

// asert(square(6) !== 4);


// Дан такой код: assert.equal(area(98), 8284);.
// Чем является 8284?

// Правильно:
// Ожидаемый (expected) результат вызова функции


// //Экспорт и два способа импорта

// //Поставьте export перед тем, что вы хотите экспортировать. Такая операция сделает это импортируемым куда угодно:

// export const pi = 3.14;
// export const e = 2.718;

// export const square = (x) => {
//   return x * x;
// };

// export const surfaceArea = (r) => {
//   return 4 * pi * square(r);
// };


// //Импортируйте специфичные штуки таким способом:
// import { surfaceArea, square } from './math';

// const surfaceOfMars = surfaceArea(3390);
// const surfaceOfMercury = surfaceArea(2440);
// const yearSquared = square(2017);

// //Или импортируйте всё:
// import * as mathematics from './math';

// const surfaceOfMars = mathematics.surfaceArea(3390);
// const surfaceOfMercury = mathematics.surfaceArea(2440);
// const yearSquared = mathematics.square(2017);
// Вот почему к импортированным сущностям обращение происходит через mathematics вот так: mathematics.surfaceArea.

export const getTriangleArea = (h, b) => {
  A = 1/2 * h * b;
  return A
}

console.log(getTriangleArea(5, 6))


// // Лексическая область видимости
// // JavaScript пытается найти значение в текущем окружении. Но значение не находится и JavaScript выходит наружу, на один уровень за попытку, пока не найдёт значение или не поймет, что значение невозможно найти.

// let a = 7;
// let b = 10;

// const multiplier = () => {
//   let a = 5;
//   return a * b;
// }

// multiplier(); // 50

// // Здесь, в выражении a * b , функция multiplier использует локальную a (потому что она обнаружена локально), и наружную b (потому что локально b найдена не была).

// Замыкания

// const createPrinter = () => {
//   const name = "King";

//   const printName = () => {
//     console.log(name);
//   }

//   return printName;
// }

// const myPrinter = createPrinter();
// myPrinter();    // King


// myPrinter — это функция, которая была возвращена createPrinter. Несмотря на то, что вызов createPrinter окончен и константы name больше не существует, значение запомнено в myPrinter.

// Это замыкание: сочетание функции и окружения, где она была заявлена.

// Иными словами: статическое типизирование означает проверку типов перед запуском программы; динамическое — проверку типов пока программа запущена.

// Слабая и сильная типизация

// JavaScript часто конвертирует типы автоматически:

// 4 + '7';      // '47'
// 4 * '7';      // 28
// 2 + true;     // 3
// false - 3;    // -3
 

// JavaScript — это язык со слабой типизацией. У него есть представление о типах, но он расслаблено к ним относится и может оперировать значениями, можно сказать, произвольно. Чем сильнее система типизации, тем строже правила.