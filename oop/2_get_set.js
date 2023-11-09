// Геттеры/сеттеры, другие сокращения
// Как и в литеральных объектах, в классах можно объявлять вычисляемые свойства, геттеры/сеттеры и т.д.
// Вот пример user.name, реализованного с использованием get/set:

class User {

  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое.");
      return;
    }
    this._name = value;
  }

}

let user = new User("Иван");
alert(user.name); // Иван

user = new User(""); // Имя слишком короткое.

// При объявлении класса геттеры/сеттеры создаются на User.prototype, вот так:

Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});

// Пример с вычисляемым свойством в скобках [...]:

class User {

  ['say' + 'Hi']() {
    alert("Привет");
  }

}

new User().sayHi();

// In JavaScript, getters and setters are special kind of methods that provide a way to get or set the value of an object's property. They are defined using get and set keywords respectively.
// Here's a basic example of a getter and a setter in an object:

let obj = {
 _name: '',
 get name() {
   return this._name;
 },
 set name(value) {
   if (value.length > 3) {
     this._name = value;
   } else {
     console.log('Name must be at least 3 characters long');
   }
 }
};

obj.name = 'Al'; // Name must be at least 3 characters long
console.log(obj.name); // undefined

obj.name = 'Alice';
console.log(obj.name); // Alice

// In this example, name is a property of the obj object. The name getter is used to get the value of _name, and the name setter is used to set the value of _name w3docs.com.
// Getters and setters can also be used in classes:

class Person {
 constructor(name) {
   this._name = name;
 }

 get name() {
   return this._name;
 }

 set name(value) {
   if (value.length > 3) {
     this._name = value;
   } else {
     console.log('Name must be at least 3 characters long');
   }
 }
}

let person = new Person('Al'); // Name must be at least 3 characters long
console.log(person.name); // undefined

person.name = 'Alice';
console.log(person.name); // Alice

// In this example, name is a property of the Person class. The name getter is used to get the value of _name, and the name setter is used to set the value of _name developer.mozilla.org.
// You can also use Object.defineProperty() to add a getter or a setter to an existing object:

const obj = { a: 0 };

Object.defineProperty(obj, 'b', {
 get() {
   return this.a + 1;
 },
 set(value) {
   this.a = value / 2;
 }
});

console.log(obj.b); // 1

obj.b = 10;
console.log(obj.a); // 5

// In this example, a getter and a setter for the property b are added to the obj object using Object.defineProperty(). The getter returns the value of a plus 1, and the setter sets the value of a to half of the value being set developer.mozilla.org.