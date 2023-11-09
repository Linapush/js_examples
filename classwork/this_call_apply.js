// явное указание this

// this - текущий объект при вызове через точку и новый объект при конструировании через new

let animal = {
    nickName: 'Dog',
    age: 1,
    went: function() {
        console.log('я бегу')
    }
}

let people = {
    name: 'Oleg',
    age: 15,

    getAnimal: function(){
        console.log(' я иду')
    },
    animalName: function() {
        console.log(this.nickName)
    }
}
people.animalName.call(animal)()

// разобраться с apply и call
