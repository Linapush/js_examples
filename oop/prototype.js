// Определение свойств и методов в конструкторе

// Для определения свойства в экземпляре необходимо добавить его в функцию-конструктор. Убедитесь, что добавляете свойство к this.

function Human (firstName, lastName) {
  // Определяем свойства
  this.firstName = firstName
  this.lastname = lastName

  // Определяем методы
  this.sayHello = function () {
    console.log(`Hello, I'm ${firstName}`)
  }
}

const chris = new Human('Chris', 'Coyier')
console.log(chris)

// Методы, обычно, определяются в прототипе, поскольку это позволяет избежать создания функции для каждого экземпляра, т.е. позволяет всем экземплярам использовать одну функцию (такую функцию называют общей или распределенной).
// Для добавления свойства в прототип используют prototype.

function Human2 (firstName, lastName) {
  this.firstName = firstName
  this.lastname = lastName
}

// Определяем метод в прототипе
Human2.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.firstName}`)
}

// Создание нескольких методов может быть утомительным.

// Определение методов в прототипе
Human2.prototype.method1 = function () { /*...*/ }
Human2.prototype.method2 = function () { /*...*/ }
Human2.prototype.method3 = function () { /*...*/ }

// Можно облегчить себе жизнь с помощью Object.assign.

Object.assign(Human2.prototype, {
  method1 () { /*...*/ },
  method2 () { /*...*/ },
  method3 () { /*...*/ }
})

