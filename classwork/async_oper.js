// Асинхронные операции
// коллбэки, промисов, асинхронные фун-ции
// async/await

// Колбеки - ф-ции, которые передаются а асинхронную операцию в качетсве аргумента
// и вызывается после завершения операции
// Позволяют указать, что нужно выполнить после завершения асинхронной операции

// fs.readFile('file.txt', 'utf-8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// // Промисы - объекты представляющие результат асинхронной операции
// // then, catch которые позволяют обработать успешное завершение операции или ошибку соответственно


// const fs = require('fs');

// const readFilePromise = new Promise((resolve, reject) => {
//   fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) reject(err);
//     resolve(data);
//   });
// });

// readFilePromise.then(data => {
//   console.log(data);
// }).catch(err => {
//   console.error(err);
// });

// В этом примере создается новый промис, который оборачивает операцию чтения файла. Если операция завершается успешно, промис вызывает метод resolve с данными в качестве аргумента. Если происходит ошибка, промис вызывает метод reject с ошибкой в качестве аргумента. Затем, с помощью методов then и catch, обрабатываются успешное завершение операции и ошибки соответственно.

// Асинхронные функции (async/await) - это синтаксический сахар над промисами, который упрощает написание асинхронного кода. Асинхронные функции используют ключевое слово async перед определением функции и ключевое слово await перед вызовом асинхронной операции.

// Пример использования асинхронных функций:


// const fs = require('fs');

// async function readFileAsync() {
//   try {
//     const data = await fs.promises.readFile('file.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readFileAsync();


// В этом примере функция readFileAsync объявлена с ключевым словом async. Внутри функции используется ключевое слово await перед вызовом операции чтения файла. Асинхронная функция позволяет писать код, который выглядит как синхронный, но при этом выполняется асинхронно.


// ПРОМИСЫ

// const myPromise = new Promise((resolve, reject) => {
//   // Выполняем асинхронную операцию
//   const result = Math.random();
//   // Если результат большcdе 0.5, считаем операцию успешной и вызываем resolve
//   if (result > 0.5) {
//     resolve(result);
//   } else {
//     // Если результат меньше или равен 0.5, считаем операцию неудачной и вызываем reject
//     reject('Ошибка: результат меньше или равен 0.5');
//   }
// });
// // Обработка результата промиса
// myPromise.then((result) => {
//   console.log('Успешное выполнение:', result);
// }).catch((error) => {
//   console.error('', error);
// });


// В данном примере мы создаем новый промис myPromise, который выполняет асинхронную операцию (в данном случае генерирует случайное число). Если результат операции больше 0.5, вызывается метод resolve и передается результат. Если результат меньше или равен 0.5, вызывается метод reject и передается сообщение об ошибке.
// Затем мы используем методы then и catch для обработки результата промиса. Метод then вызывается, если операция выполнена успешно, и получает результат в качестве аргумента. Метод catch вызывается, если операция завершилась ошибкой, и получает сообщение об ошибке в качестве аргумента.

// Примеры использования промисов:

// Чтение файла:

// const fs = require('fs');

// const readFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFile('file.txt').then(data => {
//   console.log('Содержимое файла:', data);
// }).catch(error => {
//   console.error('Ошибка чтения файла:', error);
// });


// // В этом примере мы создаем функцию readFile, которая принимает путь к файлу и возвращает промис. Внутри промиса мы используем модуль fs для чтения файла. Если при чтении файла произошла ошибка, вызывается метод reject с передачей ошибки. Если чтение файла прошло успешно, вызывается метод resolve с передачей содержимого файла.
// // Затем мы вызываем функцию readFile с указанием пути к файлу и используем методы then и catch для обработки результата промиса.


// // Пример работы Event Loop:

// console.log('Начало программы');

// setTimeout(() => {
//   console.log('Таймер 1');
// }, 0);

// setTimeout(() => {
//   console.log('Таймер 2');
// }, 0);

// console.log('Конец программы');


// В этом примере мы используем функцию setTimeout для создания двух таймеров, которые должны быть выполнены сразу же (с задержкой 0 миллисекунд). Затем мы выводим сообщение "Конец программы".

// const fetch = require('node-fetch');
// const get_pokemon = () => {
//   fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))
//   .finally(() => console.log('response was sent'))
// }

// get_pokemon()

// const https = require('https')

// https
//   .get('https://catfact.ninja/fact', res => {
//     let data = ''
//     res.on('data', chunk => {
//       data += chunk
//     })
//     res.on('end', () => {
//       const response = JSON.parse(data)
//       console.log('cat fact:', response.fact)
//     })
//   })
//   .on('error', err => {
//     console.log('error: ' + err.message)
//   })

// function university_list() {
//   fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json")
//     .then(response => response.json())
//     .then(data => {
//       let table = document.getElementById('universityTable');
//       for (let i = 0; i < data.length; i++) {
//         let row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].country}</td>
//                         <td>${data[i].web_pages[0]}</td>
//                    </tr>`;
//         table.innerHTML += row;
//       }
//     })
//     .catch(error => console.error('Ошибка:', error));
// }

// university_list();
