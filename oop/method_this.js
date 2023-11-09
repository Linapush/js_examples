// контекст - какие-то условия
// контекст исполнения в домашних условиях

let second = 2;

// function some_fun () {
//     let first = 1;
//     console.log(first)
//     console.log(second);
// }

function some_fun () {
    console.log(this)
}

let user = {
    name: "John",
    age: 30,
    addition : function() {console.log(this.name)} // метод this указывает контекст исполнения
  };

some_fun();

// console.log(first) //  так мы сделать не можем
// переменная находится в контексте функции
// она спрятана локально

// Объект пользователя

// console.log(this, 'global')