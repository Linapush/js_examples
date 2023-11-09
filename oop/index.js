// мы отображали вывод на html странице

console.log('test')
const testing = {
i: 'one',
    2: 'two',
    3: 'three',
    test : function() {
        console.log(this)
    }
}

const testing2 = {
    4: 'four',
    5: 'five',
    6: 'six',
    test2: function() {
        console.log(this.one)
    }
}

let joke = testing2.test2.bind(testing)
joke()
testing.test()
console.log(this)

// выведет глобальный объект window

function fun() {
    console.log(this)
}
fun()

// 
