// let second = 2
// function some_fun(){
//     console.log(this)
// }
// some_fun()

// // Объект пользователя
// let user = {
//     name: "John",
//     age: 30,
//     addition : function(){console.log(user.name)}
//   };

//   some_fun()
// //console.log(this, 'global') 

// function test() {

// }

// let animal = {
//     nickName : 'Dog', 
//     age : 1, 
//     went : function() {
//         console.log('i walk')
//     }
// }

// let people = {
//     name : 'Oleg', 
//     age : 15, 
//     getAnimal: function() {
//         console.log('i walk')
//     }, 
//     animalName: function(){
//         console.log(this.nickName)
//     }

// }

// let user = {
//     name : 'Arina',
//     age : 19, 
//     city : 'Irkutsk', 
//     getDo: function() {
//         console.log(this)    
//     }
// }

// let animal = {
//     nick : 'jack',
//     type : 'dog', 
//     test2: function() {
//         console.log(this.nick)
//     }
// }

// let joke = animal.test2.bind(animal)
// joke()
// user.getDo()
// console.log(this)


// function fun() {
//     console.log(this)
// }

// let btn = document.getElementById("btn")
// btn.addEventListener("click", fun(), false)