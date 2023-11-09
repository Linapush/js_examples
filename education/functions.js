// Функции могут принимать аргументы.
// И могут возвращать что-то.
const surfaceAreaCalculator = (radius) => {
    return 4 * 3.14 * radius * radius;
  }
  const surfaceOfMars = surfaceAreaCalculator(3390);
console.log(surfaceAreaCalculator(3390));


// Способы записи функций
const identity_1 = (value) => {
    return value
}
const identity_2 = value => value;
// В коде выше мы опустили фигурные скобки и слово return. Заодно мы опустили скобки вокруг аргумента — это можно делать только если у функции один аргумент.

// Устаревший синтаксис, предпочтительным является () => {}. Кроме синтаксической разницы есть и семантическая.
// Она связана с пока не изученной темой this.
const identity_3 = function(value) {
    return value
} // Так же можно определять функции используя ключевое слово function:

//или

// Такую функцию можно использовать до ее определения (в этом же файле).
function identity_4(value) {
    return value
}

// Формальными параметрами функции называются имена переменных в определении функции. Например у функции const f = (a, b) => a - b; формальные параметры — это a и b.
// Фактические параметры — это то, что было передано в функцию в момент вызова
 
const f1 = x1 => x1 * x1; // x - формальная переменная

const y1 = 5;
console.log(f1(y1)); // 25 // y - фактическая переменная

const z1 = 3;
console.log(f1(z1)); // 9 // z - фактическая переменная

// Что имеет значение, так это позиция. Во время вызова функции параметры должны передаваться в правильном порядке, и только тогда функция отработает, как предполагается.

const f2 = (a, b) => a - b;

const x2 = 5;
const y2 = 8;

console.log(f2(x2, y2)); // -3
console.log(f2(y2, x2)); // 3

// Return

// Вызов оператора return приводит к изменению течения программы. Последующие инструкции никогда не будут выполнены:

const identity_5 = (value) => {
  return value;
  const a = 3 + 5; // этот код никогда не будет достигнут
};

// Дан такой код:
// Что будет "сохранено" в константе y после выполнения?

const someFunction = (x) => {
  return 10 * 42;
};
const y = someFunction(9281);

// сохранено будет return 10 * 42, потому что с x ничего не происходит

// Что будет выведено на экран?

const func = (num) => {
   return num * num * num;
   return num * num * num * num;
   return num * num;
}
console.log(func(3));

// после 1 return программа больше не выполняется

const firstNum = 10;
const secondNum = 5;

const sum = (z, g) => z + g;

console.log(sum(firstNum, secondNum));

// тут вообще очень интересно
// было определено firstNum и SecondNum
// считается z + g
// и firstNum складывается с secondNum

// const sum = (a, b) => a + b;
// const square = num => num ** 2;
// const result = ____(3, 2) + ____(5); // 30

const squareOfSum_1 = (a, b) => a**2 + 2 * a * b + b**2
console.log(squareOfSum_1(2, 3))

const squareOfSum_2 = (a, b) => {
  return a**2 + 2 * a * b + b**2
}
console.log(squareOfSum_2(2, 3))