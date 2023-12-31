// this - это ключевое слово, Для доступа к информации внутри объекта метод может использовать 

// Прототип - это объект, который используется в JavaScript для общего хранения свойств и методов, доступных другим объектам через механизм наследования. 
// Каждый объект в JavaScript имеет прототип, на который он ссылается.
// Когда мы обращаемся к свойству или методу объекта, JavaScript сначала и щет его непосредственно в самом объекте. 
//Если свойство или метод не найдены, JavaScript автоматически обращается к прототипу объекта и проверяет его свойства и методы. 
// Если нужное свойство или метод находятся в прототипе, они будут использованы.
// Прототип в JavaScript реализуется через свойство prototype функции-конструктора или через объекты прямо через свойство __proto__. 
// Когда функция-конструктор используется для создания объекта с помощью оператора new, прототип этой функции автоматически становится прототипом созданного объекта.

// Пример с использованием __proto__:

let animal = {
  eat: function() {
    console.log("Animal is eating");
  }
};

let dog = {
  bark: function() {
    console.log("Dog is barking");
  }
};

dog.__proto__ = animal;

dog.eat(); // "Animal is eating"
dog.bark(); // "Dog is barking"

// Пример с использованием prototype у функции-конструктора:

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

let john = new Person("John");
john.greet(); // "Hello, my name is John"

// В этом примере, прототипом объектов, создаваемых с помощью функции-конструктора Person, является объект, доступный через свойство prototype этой функции. Это позволяет всем экземплярам Person иметь доступ к методу greet.
// Использование прототипов позволяет делить общую функциональность между несколькими объектами и обеспечивает наследование свойств и методов от прототипов к потомкам. Это одна из ключевых особенностей JavaScript, которая делает его гибким языком программирования.

// property
// Свойства в JavaScript позволяют вам получить доступ к характеристикам объекта. Эти объекты могут быть предопределены, как объект Window или объект документа, или они могут быть объектами, созданными вами.
// Имейте в виду, что объекты в JavaScript изменяемы, а это означает, что когда переменной присваивается объект, ссылка на объект — это то, что фактически сохраняется, а не сам фактический объект. Таким образом, изменение свойств объекта изменяет тот же объект (не создает новый), и эти изменения отражаются везде, где на этот объект ссылаютс

var car = {
    make: 'Tesla',
    model: 'Model 3',
    color: 'red',
    year: 2021,
    electric: true
};

console.log(car.make); // Outputs: Tesla
console.log(car['color']); // Outputs: red

car.year = 2022; // Change the value of the 'year' property
car.price = 50000; // Add a new property 'price'
delete car.electric; // Delete the 'electric' property

// Свойство-функция
// Дескриптор позволяет задать свойство, которое на самом деле работает как функция. Для этого в нём нужно указать эту функцию в get.
// Например, у объекта user есть обычные свойства: имя firstName и фамилия surname.
// Создадим свойство fullName, которое на самом деле является функцией:

var user = {
  firstName: "Вася",
  surname: "Петров"
}

Object.defineProperty(user, "fullName", {
  get: function() {
    return this.firstName + ' ' + this.surname;
  }
});

alert(user.fullName); // Вася Петров

// Также можно указать функцию, которая используется для записи значения, при помощи дескриптора set.

var user = {
  firstName: "Вася",
  surname: "Петров"
}

Object.defineProperty(user, "fullName", {

  get: function() {
    return this.firstName + ' ' + this.surname;
  },

  set: function(value) {
      var split = value.split(' ');
      this.firstName = split[0];
      this.surname = split[1];
    }
});

user.fullName = "Петя Иванов";
alert( user.firstName ); // Петя
alert( user.surname ); // Иванов

// Указание get/set в литералах
// Если мы создаём объект при помощи синтаксиса { ... }, то задать свойства-функции можно прямо в его определении.
// Для этого используется особый синтаксис: get свойство или set свойство.
// Например, ниже объявлен геттер-сеттер fullName:

var user = {
  firstName: "Вася",
  surname: "Петров",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
};

alert( user.fullName ); // Вася Петров (из геттера)

user.fullName = "Петя Иванов";
alert( user.firstName ); // Петя  (поставил сеттер)
alert( user.surname ); // Иванов (поставил сеттер

// Домашнее задание на следующую пару:
//   - читать про классы и все то, что с ними связано (на следующей паре мы закрепим материал)
//   - доделывать свои проекты, если закончилась фантазия, то обращайтесь ко мне и я подскажу, что можно добавить
//   - начинайте читать про методы get(), set(), а также prototype

// p.s далее мы будем углубляться более подробно в саму суть js и отходить от той базовой концепции, которая у нас была до этого, поэтому продолжайте тренироваться на leetcode, stepik и free_code_camp, так как в противном случае вам будет нечего делать на парах, если вы не будете понимать что-то простое


// В JavaScript существует 4 способа создать объект:
// Функция-контруктор (constructor function)
// Класс (class)
// Связывание объектов (object linking to other object, OLOO)
// Фабричная функция (factory function)

// сравним между собой классы и фабричные функции по следующим критериям: наследование, инкапсуляция, ключевое слово «this», обработчики событий.
// ООП - способ написания кода, позволяющий создавать объекты с помощью одного объекта
// Принципы ООП
// Полиморфизм - позволяет объектам одного класса (в данном случае класс Human) проявлять различное поведение в зависимости от контекста. Когда мы создаем экземпляр класса Human с определенным именем, этот экземпляр получает свойства, наследуемые от родительского класса (если такие имеются) и может также иметь собственные свойства (например, возраст, пол, адрес и т.д.). Таким образом, каждый экземпляр класса Human будет представлять уникальный объект с уникальными значениями свойств, такими как имя, возраст и т.д. Это позволяет нам создавать различные "людей" с разными именами, атрибутами и поведением, но все они будут иметь общие свойства и методы, унаследованные от класса Human.
// Инкапсуляция - когда мы скрываем детали реализации от посторонних, делая переменные и функции недоступными извне. 
// Наследование - структурировании кода, когда у нас имеется несколько проектов разного уровня


// Различие между классами и ф-циями конструкторами
// Конструкторами являются функции, в которых используется ключевое слово «this».
// Классы являются абстракцией («синтаксическим сахаром») над функциями-конструкторами. Они облегчают задачу создания экземпляров.

// 1 (this, new)
// ф-ция конструктор
function Human(firstName = String, lastName = String) {
    this.firstName = firstName // this позволяет сохранять и получать доступ к уникальным значениям создаваемого экземпляра.
    this.lastName = lastName
}; 
// создание экземлпяра
const chris1 = new Human('Chris', 'Coyier') // экземпляры создаются с помощью ключевого слова «new».
console.log(chris1.firstName) // Chris
console.log(chris1.lastName) // Coyier

const zell = new Human('Zell', 'Liew')
console.log(zell.firstName) // Zell
console.log(zell.lastName) // Liew

// Классы являются абстракцией («синтаксическим сахаром») над функциями-конструкторами. Они облегчают задачу создания экземпляров.
// 2 (class, constructor, this, new)
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
const chris2 = new Human('Chris', 'Coyier')
console.log(chris2.firstName) // Chris
console.log(chris2.lastName) // Coyier

// Связывание объектов
// В данном подходе мы определяем проект как обычный объект. Затем с помощью метода (который, как правило, называется init, но это не обязательно, в отличие от constructor в классе) мы инициализируем экземпляр.
const Human = {
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        return this
    }
}
// Для создания экземпляра используется Object.create. После создания экземпляра вызывается init.
const chris3 = Object.create(Human).init('Chris', 'Coyier')

console.log(chris3.firstName) // Chris
console.log(chris3.lastName) // Coyier

// Фабричная функция
// Фабричная функция — это функция, возвращающая объект. Можно вернуть любой объект. Можно даже вернуть экземпляр класса или связывания объектов.

function Human2(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// Для создания экземпляра нам не требуется ключевое слово «new». Мы просто вызываем функцию.

const chris4 = Human('Chris', 'Coyier')

console.log(chris4.firstName) // Chris
console.log(chris4.lastName) // Coyier

// Определение свойств и методов

// Методы — это функции, объявленные в качестве свойств объекта.

    const someObject = {
        someMethod () { /* ... */ }
    }

// В ООП существует два способа определения свойств и методов:

// В экземпляре
// В прототипе

// Определение свойств и методов в конструкторе

// Для определения свойства в экземпляре необходимо добавить его в функцию-конструктор. Убедитесь, что добавляете свойство к this.

function Human3 (firstName, lastName) {
  // Определяем свойства
  this.firstName = firstName
  this.lastname = lastName

  // Определяем методы
  this.sayHello = function () {
    console.log(`Hello, I'm ${firstName}`)
  }
}

const chris5 = new Human('Chris', 'Coyier')
console.log(chris5)

// Определение свойств и методов в классе

// Свойства экземпляра можно определить в constructor.

class Human {
  constructor (firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName

      this.sayHello = function () {
        console.log(`Hello, I'm ${firstName}`)
      }
  }
}