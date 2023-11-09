// Condition
// Условие формально выглядит так:

// if (условие) then
//    выполнить что-то
// else if (другое_условие) then
//    выполнить что-то другое
// else (ни одного из тех условий) then
//    выполнить что-то ещё

const abs = (num) => {
    if (num > 0) {
      return num;
    } else if (num < 0) {
      return -num;
    } else {
      return 0;
    }
  }
console.log(abs(-3))

// То, что даёт ответ TRUE или FALSE, называется предикатом.
// ===
// !==
// >
// <
// >=
// <=

// AND (&&):

// | A     | B     | A AND B |
// | ----- | ----- | ------- |
// | TRUE  | TRUE  | TRUE    |
// | TRUE  | FALSE | FALSE   |
// | FALSE | TRUE  | FALSE   |
// | FALSE | FALSE | FALSE   |

// OR (||):

// | A     | B     | A OR B |
// | ----- | ----- | ------ |
// | TRUE  | TRUE  | TRUE   |
// | TRUE  | FALSE | TRUE   |
// | FALSE | TRUE  | TRUE   |
// | FALSE | FALSE | FALSE  |

// NOT (!):

// | A     | NOT A |
// | ----- | ----- |
// | TRUE  | FALSE |
// | FALSE | TRUE  |

const abs2 = (num) => {
    if (num === 0 || num > 0) {
      return num;
    } else {
      return -num;
    } 
  }
  console.log(abs2(-4))

// Math.abs("-1"); // 1
// Math.abs(-2); // 2  

// Тернарный оператор

// В JavaScript и многих других языках есть сокращённая версия if: она называется тернарным оператором (ternary operator):

// condition ? expression : expression

// const absValue = (num === 0 || num > 0) ? num : -num;

// функция-предикат определяет, является ли число num четным
const isEven = num => num % 2 === 0;
// функция увеличивает полученное число num на 10
const increaseNum = num => num + 10;

//
const num = 6;
const result1 = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
console.log(result1)

//
const testScore = 10;
const result2 = testScore < 10 ? 'bad' : 'good';
console.log(result2);
// Что будет выведено в консоль?
// 10 меньше 10 -> false
// 10 больше 10 -> false
// 10 == 10 -> true

// условие можн записать и без else, вернув return на уровне с if:
const func = (num) => {
    if (num > 0) {
      return num - 1;
    }
  
    return num + 1;
  };

console.log(func(-3))


const finalGrade = (exam, projects) => {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}

console.log(finalGrade(100, 12))
console.log(finalGrade(99, 0));    // 100
console.log(finalGrade(10, 15)); 

console.log(finalGrade(85, 5)); 
console.log(finalGrade(55, 3)); 
console.log(finalGrade(55, 0)); 
console.log(finalGrade(22, 2)); 

// Syntax error. Неверное использование языка. Часто лишние или недостающие скобки или кавычки.
// Reference error. Использование несуществующего названия
// Type error. Использование неверного типа, например попытка вызвать константу числа, как функцию. 
// Logic error. Ваш код выполняет не то, что требуется, но программа запускается и не выдаёт ошибок трёх перечисленных выше типов. Сломана логика

// Считается, что правильная формулировка вопроса содержит как минимум половину ответа, а также это дает толчок мыслям, направляя их в нужное русло.

// В js не существует sum(5, 10), если ф-ция не определена

const sum = (a, b) => a + b 
console.log(sum(5, 10));


// Рекурсия, рекурсивные ф-ции 
// const surfaceOfMars = surfaceAreaCalculator(3390);  // это "ЧТО", в таком виде легче понять суть
// const surfaceOfMars = 4 * 3.14 * 3390 * 3390;       // это "КАК

// Когда функция вызывает сама себя, создаётся новая идентичная коробка
const factorial = (n) => {
    if (n === 1) {
      return 1;
    }
    else {
      return n * factorial(n-1);
    }
  }
  
  const answer = factorial(3);

  // требования рекурсии:
  // условие, когда остановиться (Простой базовый случай или терминальный сценарий)
  // двигаться по рекурсии

// Может ли функция сначала вызвать другую функцию, а потом вызвать саму себя?
// Правильный ответ: нет


// Возможно ли наличие нескольких терминальных условий?
// Пример:
// if (n === 0){
//   return;
// }
// if (n === 1){
//   return;
// }
// рекурсия и условие 
const sum1 = n => (n === 0) ? 0 : n + sum1(n - 1);


// Функция sum принимает целое положительное число n и возвращает сумму всех чисел, входящих в интервал [1, n]:

// const sum = (n) => {
//   if (n === 1) {
//     return 1;
//   }

//   return n + sum(n - 1);
// };
// Как мы знаем из видео, при рекурсивном процессе формируется цепочка отложенных вычислений. Эта цепочка окончательно формируется при достижении терминального условия, после чего она ("цепочка") вычисляется в конкретное значение, которое и возвращается в качестве результата выполнения функции.

// sum(5);
// Выберите выражение, соответствующее тому, как будет выглядеть цепочка отложенных вычислений при вызове sum(5).

// Ответ: 5 + (4 + (3 + (2 + 1)))

const sequenceSum = (begin, end) => {
    if ( begin > end) {
        return NaN;
    } else if ( begin === end ) {
      return begin || end
    }
    return sequenceSum(begin + end)
}
console.log(sequenceSum(2, 6))

sequenceSum(1,-5);