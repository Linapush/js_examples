
// Function Declaration - функция, объявленная в основном потоке кода.
function sum(a, b) {
    return a + b;
  }
  
// Function Expression - объявление функции в контексте какого-либо выражения, например присваивания.
var sum = function(a, b) {
    return a + b;
}

// Классы в JavaScript  представляют собой синтаксический сахар над существующим в JavaScript механизмом прототипного наследования. 
// Синтаксис классов предоставляет более простой и понятный способ создания объектов и организации наследования.

// Объявление класса
// Первый способ определения класса — class declaration (объявление класса). Для этого необходимо воспользоваться ключевым словом class и указать имя класса (в примере — «Rectangle»).

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Выражение класса
// Второй способ определения класса — class expression (выражение класса). Можно создавать именованные и безымянные выражения. В первом случае имя выражения класса находится в локальной области видимости класса и может быть получено через свойства самого класса, а не его экземпляра.

// безымянный
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// отобразится: "Rectangle"

// именованный
var Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// отобразится: "Rectangle2"

// Метод constructor — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса. В классе может быть только один метод с именем constructor
// Ключевое слово super можно использовать в методе constructor для вызова конструктора родительского класса.
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100

// Ключевое слово static, определяет статический метод или свойства для класса
// Статические методы, часто используются для создания служебных функций для приложения, в то время как статические свойства полезны для кеширования в рамках класса,
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Точка";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; //undefined
  p1.distance; //undefined
  p2.displayName; //undefined
  p2.distance; //undefined
  
  console.log(Point.displayName); // "Точка"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755

//   Привязка this в прототипных и статических методах
//   Когда статический или прототипный метод вызывается без привязки к this объекта (или когда this является типом boolean, string, number, undefined, null), тогда this будет иметь значение undefined внутри вызываемой функции. Поведение будет таким же даже без директивы "use strict", потому что код внутри тела класса всегда выполняется в строгом режиме.

  class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.speak(); // объект Animal
  let speak = obj.speak;
  speak(); // undefined
  
  Animal.eat(); // класс Animal
  let eat = Animal.eat;
  eat(); // undefined

//   Если мы напишем этот же код используя классы основанные на функциях, тогда произойдёт автоупаковка основанная на значении this, в течение которого функция была вызвана. В строгом режиме автоупаковка не произойдёт - значение this останется прежним.

  function Animal() {}
  
  Animal.prototype.speak = function () {
    return this;
  };
  
  Animal.eat = function () {
    return this;
  };
  
  let obj2 = new Animal();
  let speak2 = obj.speak;
  speak2(); // глобальный объект (нестрогий режим)
  
  let eat2 = Animal.eat;
  eat2(); // глобальный объект (нестрогий режим)
  
//   Свойства экземпляра
//   Свойства экземпляра должны быть определены в методе класса:
  
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
//   Статические (class-side) свойства и свойства прототипа должны быть определены за рамками тела класса:
  
  Rectangle.staticWidth = 20;
  Rectangle.prototype.prototypeWidth = 25;

//   Наследование классов с помощью extends
//   Ключевое слово extends используется в объявлениях классов и выражениях классов для создания класса, дочернего относительно другого класса.
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} издаёт звук.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // вызывает конструктор super класса и передаёт параметр name
    }
  
    speak() {
      console.log(`${this.name} лает.`);
    }
  }
  
  let d = new Dog("Митци");
  d.speak(); // Митци лает

//   Если в подклассе присутствует конструктор, он должен сначала вызвать super, прежде чем использовать this.
//   Аналогичным образом можно расширять традиционные, основанные на функциях "классы":

  function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function () {
    console.log(`${this.name} издаёт звук.`);
  };
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} лает.`);
    }
  }
  
  let d2 = new Dog("Митци");
  d2.speak(); // Митци лает
  
// Для аналогичных методов дочерний метод имеет приоритет над родительским.

// Species
// Допустим, вам хотелось бы возвращать объекты типа Array в вашем производном от массива классе MyArray. Паттерн species позволяет вам переопределять конструкторы по умолчанию.

// Например, при использовании таких методов, как map(), который возвращает конструктор по умолчанию, вам хотелось бы, чтобы они возвращали родительский объект Array вместо объекта MyArray. Символ Symbol.species позволяет это реализовать:

class MyArray extends Array {
  // Изменить species на родительский конструктор Array
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

// Обращение к родительскому классу с помощью super
// Ключевое слово super используется для вызова функций на родителе объекта.


class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} издаёт звук.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} рычит.`);
  }
}

let l = new Lion("Фаззи");
l.speak();
// Фаззи издаёт звук.
// Фаззи рычит.

// Mix-ins
// Абстрактные подклассы, или mix-ins, — это шаблоны для классов. У класса в ECMAScript может быть только один родительский класс, поэтому множественное наследование (к примеру, от tooling classes) невозможно. Функциональность должен предоставлять родительский класс.
// Для реализации mix-ins в ECMAScript можно использовать функцию, которая в качестве аргумента принимает родительский класс, а возвращает подкласс, его расширяющий:


var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

// Класс, использующий такие mix-ins, можно описать следующим образом:
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}



// Class declaration создаёт новый класс с данным именем на основе прототипного наследования.

// Можно так же определить класс, используя class expression. Но в отличие от class expression, class declaration не позволяет снова объявить уже существующий класс, это приведёт к ошибке типа.

// Синтаксис
// class name [extends] {
//   // тело класса
// }
// Описание
// Как и class expression, тело class declaration будет исполняться в строгом режиме. Свойство конструктора является опциональным.

// Class declaration не поднимается (в отличие от декларируемых функций).

// Примеры
// Простой class declaration
// В следующем примере сначала определяется класс с именем Polygon, затем он наследуется для создания класса Square. Заметьте, что super(), используемый в конструкторе, может быть использован только в конструкторе и должен быть вызван до того, как будет использовано ключевое слово this.

class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}

let polygon_1 = new Polygon(50, 30)
let polygon_2 = new Square(40, 20)
console.log(polygon_1.name)
console.log(polygon_2.name)