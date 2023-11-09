// Prototype - это свойство, которое есть у каждой функции и объекта по умолчанию. Это свойство позволяет объектам наследовать свойства и методы от прототипа programiz.com.

function Person() {
   this.name = 'John',
   this.age = 23
}

const person = new Person();

// Проверка значения prototype
console.log(Person.prototype); // { ... }

// В приведенном выше примере мы пытаемся получить доступ к свойству prototype функции-конструктора Person. Поскольку свойство prototype в данный момент не имеет значения, оно показывает пустой объект { ... } programiz.com.
// prototype также позволяет добавлять новые свойства и методы в конструкторы объектов:

// Конструктор функции
function Person() {
   this.name = 'John',
   this.age = 23
}

// Добавление свойства в конструктор функции
Person.prototype.gender = 'male';

// Проверка значения prototype
console.log(Person.prototype); // { gender: 'male' }


// В приведенном выше примере мы добавили новое свойство gender в функцию-конструктор Person с помощью prototype. Теперь все объекты, созданные с помощью Person, будут иметь это свойство programiz.com.
// Также можно добавить новые методы в конструктор функции с помощью prototype:

// Конструктор функции
function Person() {
   this.name = 'John',
   this.age = 23
}

// Добавление метода в конструктор функции
Person.prototype.greet = function() {
   console.log('hello ' + this.name);
}

const person2 = new Person();
person2.greet(); // hello John

// В приведенном выше примере мы добавили новый метод greet в функцию-конструктор Person с помощью prototype. Теперь все объекты, созданные с помощью Person, будут иметь этот метод programiz.com.

// JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства. Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

// Точнее, свойства и методы определяются в свойстве prototype функции-конструктора объектов, а не в самих объектах.

// В JavaScript создаётся связь между экземпляром объекта и его прототипом (свойство __proto__, которое является производным от свойства prototype конструктора), а свойства и методы обнаруживаются при переходе по цепочке прототипов.

// Примечание: Важно понимать, что существует различие между прототипом объекта (который доступен через Object.getPrototypeOf(obj) или через устаревшее свойство __proto__) и свойством prototype в функциях-конструкторах. Первое свойство является свойством каждого экземпляра, а второе - свойством конструктора. То есть Object.getPrototypeOf(new Foobar()) относится к тому же объекту, что и Foobar.prototype.

// Давайте посмотрим на пример, чтобы стало понятнее.

// Понимание прототипа объектов
// Вернёмся к примеру, когда мы закончили писать наш конструктор Person()- загрузите пример в свой браузер. Если у вас ещё нет работы от последней статьи, используйте наш пример oojs-class-further-exercises.html (см. Также исходный код).

// В этом примере мы определили конструктору функцию, например:

function Person(first, last, age, gender, interests) {
    // Определения методов и свойств
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    //...см. Введение в объекты для полного определения
  }
  
// Затем мы создаём экземпляр объекта следующим образом:
var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
person1.valueOf();

// в консоли
Object.prototype;


// Этот метод — Object.valueOf()наследуется person1, потому что его конструктором является Person(), а прототипом Person() является Object(). valueOf() возвращает значение вызываемого объекта — попробуйте и убедитесь! В этом случае происходит следующее:

// Сначала браузер проверяет, имеет ли объект person1 доступный в нем метод valueOf(), как определено в его конструкторе Person().
// Это не так, поэтому следующим шагом браузер проверяет, имеет ли прототип объекта (Object()) конструктора Person() доступный в нем метод valueOf(). Так оно и есть, поэтому он вызывается, и все хорошо!

// Свойство prototype: Где определены унаследованные экземпляры
// Итак, где определены наследуемые свойства и методы? Если вы посмотрите на страницу со ссылкой Object, вы увидите в левой части большое количество свойств и методов - это намного больше, чем количество унаследованных членов, доступных для объекта person1. Некоторые из них унаследованы, а некоторые нет - почему это?

// Как упоминалось выше, наследованные свойства это те, что определены в свойстве prototype (вы можете называть это подпространством имён), то есть те, которые начинаются с Object.prototype., а не те, которые начинаются с простого Object. Значение свойства prototype - это объект, который в основном представляет собой контейнер для хранения свойств и методов, которые мы хотим наследовать объектами, расположенными дальше по цепочке прототипов.

// Таким образом Object.prototype.watch(), Object.prototype.valueOf() и т. д. доступны для любых типов объектов, которые наследуются от Object.prototype, включая новые экземпляры объектов, созданные из конструктора Person() .

// Object.is(), Object.keys() и другие члены, не определённые в контейнере prototype, не наследуются экземплярами объектов или типами объектов, которые наследуются от Object.prototype. Это методы / свойства, доступные только в конструкторе Object().

// Снова create()
// Ранее мы показали, как метод Object.create() может использоваться для создания нового экземпляра объекта.

// Например, попробуйте это в консоли JavaScript предыдущего примера:

var person4 = Object.create(person1);
// На самом деле create() создаёт новый объект из указанного объекта-прототипа. Здесь person2 создаётся с помощью person1 в качестве объекта-прототипа. Это можно проверить, введя в консоли следующее:

person2.__proto__;
// Это вернёт объект person1.

// Свойство constructor
// Каждая функция-конструктор имеет свойство prototype, значением которого является объект, содержащий свойство constructor. Это свойство constructor указывает на исходную функцию-конструктор. Как вы увидите в следующем разделе, свойства, определённые в свойстве Person.prototype (или в общем случае в качестве свойства прототипа функции конструктора, который является объектом, как указано в предыдущем разделе) становятся доступными для всех объектов экземпляра, созданных с помощью конструктор Person(). Следовательно, свойство конструктора также доступно для объектов person1 и person2.

// в консоли
person1.constructor;
person4.constructor;
