let student = new Object({
    name: 'Vlad',
    age: 19,
    go: function () {
        console.log(`{$t}`)
    }
})

Object.prototype.go_to_study = function () { //
    console.log("I want to work")
}
console.log(student.go_to_study())
//
// let worker = Object.create(student)
// worker.name = 'Максим'
// console.log(worker)







// // Пример мутации
// let test = {
//     name: "MAxim",
//     age: 21
// }
// let test_2 = test

// test_2.name = "Vlad"
// // console.log(test)
// // console.log(test_2)

// let test_3 = Object.create({}, {
//     name: {
//         value: "new_name",
//         enumerable: true,
//         writable: true
//     },
//     age: {
//         value: 31,
//         enumerable: false,
//         configurable: true,
//     },
//     age_x2: {
//         get() {
//            return this.age * 2
//         },
//         set(value) {
//             document.body.style.background = 'green'
//             console.log(value)
//         }
//     }
// })
// console.log(test)
// test_3.name = "Viktor"
// console.log(test_3)



// Попробовать поработать с create