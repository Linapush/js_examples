// In JavaScript, a mixin is a class containing methods that can be used by other classes without a need to inherit from it. It provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes javascript.info.

// Here is an example of how to implement a mixin in JavaScript:

// mixin
let sayHiMixin = {
 sayHi() {
   alert(`Hello ${this.name}`);
 },
 sayBye() {
   alert(`Bye ${this.name}`);
 }
};

class User {
 constructor(name) {
   this.name = name;
 }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

// In the above example, the sayHiMixin is used to add some "speech" for User. There’s no inheritance, but a simple method copying javascript.info.
// Mixins can also benefit from inheritance between themselves. Consider the following example:

let sayMixin2 = {
 say(phrase) {
   alert(phrase);
 }
};

let sayHiMixin2 = {
 __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)
 sayHi() {
   // call parent method
   super.say(`Hello ${this.name}`); // (*)
 },
 sayBye() {
   super.say(`Bye ${this.name}`); // (*)
 }
};

class User {
 constructor(name) {
   this.name = name;
 }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

// In this example, the sayHiMixin is using the sayMixin as its prototype. This allows it to call the say method from sayMixin javascript.info.
// It's important to note that mixins can be used to add behavior to a class without having to use inheritance. This can be useful when you want to add functionality to a class without creating a new subclass.

// EventMixin
// Многие объекты в браузерной разработке (и не только) обладают важной способностью – они могут генерировать события. События – отличный способ передачи информации всем, кто в ней заинтересован. Давайте создадим примесь, которая позволит легко добавлять функциональность по работе с событиями любым классам/объектам.

// Примесь добавит метод .trigger(name, [...data]) для генерации события. Аргумент name – это имя события, за которым могут следовать дополнительные аргументы с данными для события.
// Также будет добавлен метод .on(name, handler), который назначает обработчик для события с заданным именем. Обработчик будет вызван, когда произойдёт событие с указанным именем name, и получит данные из .trigger.
// …и метод .off(name, handler), который удаляет обработчик указанного события.
// После того, как все методы примеси будут добавлены, объект user сможет сгенерировать событие "login" после входа пользователя в личный кабинет. А другой объект, к примеру, calendar сможет использовать это событие, чтобы показывать зашедшему пользователю актуальный для него календарь.

// Или menu может генерировать событие "select", когда элемент меню выбран, а другие объекты могут назначать обработчики, чтобы реагировать на это событие, и т.п.

// Вот код примеси:

let eventMixin = {
  /**
   * Подписаться на событие, использование:
   * menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return; // обработчиков для этого события нет
    }

    // вызовем обработчики
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};
// Итак, у нас есть 3 метода:

// .on(eventName, handler) – назначает функцию handler, чтобы обработать событие с заданным именем.

// Технически существует свойство _eventHandlers, в котором хранится массив обработчиков для каждого имени события, и оно просто добавляет это событие в список.

// .off(eventName, handler) – убирает функцию из списка обработчиков.

// .trigger(eventName, ...args) – генерирует событие: все назначенные обработчики из _eventHandlers[eventName] вызываются, и ...args передаются им в качестве аргументов.

// Использование:

// Создадим класс
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Добавим примесь с методами для событий
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// Добавим обработчик, который будет вызван при событии "select":
menu.on("select", value => alert(`Выбранное значение: ${value}`));

// Генерирует событие => обработчик выше запускается и выводит:
menu.choose("123"); // Выбранное значение: 123


// Теперь если у нас есть код, заинтересованный в событии "select", то он может слушать его с помощью menu.on(...).
// А eventMixin позволяет легко добавить такое поведение в любой класс без вмешательства в цепочку наследования.
// Итого
// Примесь – общий термин в объектно-ориентированном программировании: класс, который содержит в себе методы для других классов.
// Некоторые другие языки допускают множественное наследование. JavaScript не поддерживает множественное наследование, но с помощью примесей мы можем реализовать нечто похожее, скопировав методы в прототип.
// Мы можем использовать примеси для расширения функциональности классов, например, для обработки событий, как мы сделали это выше.
// С примесями могут возникнуть конфликты, если они перезаписывают существующие методы класса. Стоит помнить об этом и быть внимательнее при выборе имён для методов примеси, чтобы их избежать.

