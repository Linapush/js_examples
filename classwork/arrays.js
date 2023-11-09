// массивы и объекты, работа с массивами, push, assign (объединение), map, filter

// ссылочные типы данных
// сложные структуры данных (именованные коллекции, структурные коллекции)
// push/ slice/ pop/ 
// как сделать копию массива на js

// const massive = [1, 2, 6, 10]
// // const massive2 = massive
// const massive2 = massive.slice()
// massive2.push(100)

// console.log(massive2)
// console.log(massive)


// const Human = {
//     username : 'Oleg',
//     password : '0000'
// }
// //const Oleg = {...Human}
// const Oleg = Object.assign({}, Human)

// delete Oleg.password
// // Oleg['new_password'] = '123'

// console.log(Oleg)
// console.log(Human)
// // console.log(massive.push(6))
// // console.log(massive.pop(3))

// // разворачиваем ф-цию
// const obj1 = {
//     name : "Max"
// }
// const obj2 = {
//     last_name : "Yarovoy"
// }
// // разворачиваем ключи:объекты 1 и 2
// // const obj3 = {
// //     ...obj1, ...obj2
// // }
// // console.log(obj3)

// // метод assign
// // объединение объектов js
// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3)

// метод map делает копию "под капотом"
// он делает не просто копию - он создает новый массив, в котором каждый элемент получен путем применения заданной функции к соответствующему элементу исходного массива. 
// ф-ция высшего порядка - принимает в себя ф-цию
// let arr = [12, 2, 40];

// let arr2 = arr.map( (item) => {
//     return [item * 2]
// })
// let arr2 = arr.map( (item) => {
//     return [item, "hello"]
// })

// let arr2 = arr.filter( (item) => {
//     return (
//         item > 6 
//     )
// })

//arr2.push(2)
// console.log(arr)
// console.log(arr2)

// прописываем query параметры 
// метод reduce 
// let arr = [12, 2, 40];

// let sum = arr.reduce((curent_sum, item) => {
//     return curent_sum + item
// },
// )
// let max = arr.reduce((current_max, item) =>{
//     if (item > current_max){
//         return item
//     }
//     else {
//         return current_max
//     }
// })
// console.log(arr)
// console.log(sum)
// console.log(max)

// let arr1 = [12, 2, 40];
// const initialValue = 0;

// let result = arr1.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);

// console.log(result); 

// простое удаление и метод splice
// let arr_1 = ["I", "go", "home"];
// delete arr_1[1]; // удалить "go"
// console.log( arr_1[1] );
// console.log( arr_1.length ); // 3
// console.log(arr_1)

// let arr1 = ["Я", "изучаю", "JavaScript"];
// arr1.splice(1, 1);
// console.log( arr1 ); 

// let arr2 = ["Я", "изучаю", "JavaScript", "3", "недели"];
// arr2.splice(0, 3, "Сентябрь", "уже", "идет");
// console.log( arr2 ) 

// let arr3 = ["Я", "изучаю", "JavaScript"];
// arr3.splice(2, 0, "язык");
// console.log( arr3 );

// метод concat
// let arr = [1, 2];
// console.log( arr.concat([3, 4]) ); // 1,2,3,4


// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
// let map = new Map();

// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// console.log(map.get(1)); // "num1"
// console.log(map.get("1")); // "str1"

// console.log(map.size); // 3

// // Set - особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set хранит только 3 уникальных значения
// console.log(set.size); // 3

// for (let user of set) {
//   console.log(user.name); // John (потом Pete и Mary)
// }


// const arr1 = [4, 9, 0, 1]

// arr1.sort((a, b) => a - b)
// console.log(arr1)


// function sort_arr(arr) {
//     const result = []
//     for () {
//         let i = 0
//     }
// }

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

