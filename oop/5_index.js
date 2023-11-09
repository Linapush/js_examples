// declaration

class Test {
}
// expression


class Cat {

    constructor(name) {
        this.name = name
        this.height = height
    }

    eat() {
       `${this.name} идет есть!`
    }
};

class Lion extends Cat {
    constructor(name, height, ves) {
        super(name, height);
        this.ves = ves
    }
    lion_go_eat() {
        return super.go_eat()
    }
}

let cat_1 = new Cat("Мурзик")
let cat_2 = new Lion("Виктор")
console.log(cat_1.eat())
console.log(cat_2.eat())

// get_big_let() {
//     this.new_val.toUpperCase()
// }

// Никаких типов данных нет - все является оюъектами

// самые простые - массивы
// простые типы - number, string
// ссылочные - ф-ции классы

console.log(document)
console.log(window)

// У объекта window есть прототип 