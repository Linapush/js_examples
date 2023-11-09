// // // Конструктор function и оператор new

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };

// const jhon = new Person('Jhon', 1990);
// // console.log(jhon) // Person { firstName: 'Jhon', birthYear: 1990 }

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// // console.log(jhon instanceof Person); //true

// // // Стрелочная ф-ция

// // // Person.hey = function () {
// // //     console.log('Hey there!');
// // //     console.log(this)
// // // }
// // // Person.hey();


// // ПРОТОТИП (Prototype) и __proto__

// // свойства объекта, которые используются для создания прототипного наследования в JavaScript. 
// // Они позволяют объектам наследовать свойства и методы от других объектов, 
// // что упрощает разработку и повторное использование кода. 

// // Свойство prototype является ссылкой на объект, который будет использоваться как прототип для новых объектов, созданных с помощью конструктора. Это свойство доступно только для функций и используется для определения методов и свойств, которые будут унаследованы всеми экземплярами этой функции.
// // Свойство proto является ссылкой на прототип текущего объекта. Оно доступно для всех объектов и используется для доступа к свойствам и методам прототипа этого объекта.

// console.log(Person.prototype); // Person {}

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// };

// jhon.calcAge(); // 47
// matilda.calcAge(); // 20
// jack.calcAge(); // 62

// // __proto__
// console.log(jhon.__proto__); //Person { calcAge: [Function] }
// console.log(jhon.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(jhon)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jhon.species, Person.species); // Homo Sapiens undefined

// console.log(jhon.hasOwnProperty('firsName')); // false
// console.log(jhon.hasOwnProperty('species')); // false

// // Prototypal Inheritance on Built-In Objects
// console.log(jhon.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jhon.__proto__.__proto__);
// console.log(jhon.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);



// __PROTO__

// Свойство __proto__ объекта Object.prototype (en-US) является свойством доступа (комбинацией геттера и сеттера), 
// которое расширяет внутренний прототип [[Prototype]] объекта 
// (являющийся объектом или null), 
// через который осуществлялся доступ.

// КЛАССЫ

//  НАПОМИНАЛКА!
// Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части «выражения присваивания» =:
// let sum = function(a, b) {
//   return a + b;
// };

// Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.
// function sum(a, b) {
//   return a + b;
// }

// Класс Expression
// const PersonCl = class {} //  способ создания класса, который может быть присвоен переменной. Он может быть использован для создания анонимных классов или для создания классов внутри других выражений.


// // Класс Declaration
class PersonCl1 {         //   способ создания именованного класса, который может быть использован в любом месте кода. Он объявляется с помощью ключевого слова class и может содержать конструктор, методы и свойства.
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Методы экземпляра
  // Методы будут добавлены в свойство .prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
    // Static method
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
}

const jessica = new PersonCl1('Jessica Davis', 1996);

// console.log(jessica); //PersonCl1 { _fullName: 'Jessica Davis', birthYear: 1996 }
// jessica.calcAge();
// console.log(jessica.age); // 41

// console.log(jessica.__proto__ === PersonCl1.prototype); // // проверка того, что свойство __proto__ объекта jessica ссылается на прототип PersonCl.prototype. Это свойство (__proto__) позволяет объекту иметь доступ к методам и свойствам, определенным в прототипе функции-конструктора.
// console.log(jessica.__proto__); // PersonCl1 {}
// console.log(__proto__); // {}
console.log(Object.getPrototypeOf(jessica) === PersonCl1) // false
console.log(Object.getPrototypeOf(jessica) === PersonCl1.prototype); //true

// НАСЛЕДОВАНИЕ

// class StudentCl extends PersonC11 {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }
//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }
//     calcAge() {
//         console.log(
//           `I'm ${
//             2037 - this.birthYear
//           } years old, but as a student I feel more like ${
//             2037 - this.birthYear + 10
//           }`
//         );
//       }
//     }
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();