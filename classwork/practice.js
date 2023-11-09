// нетипизирова
// console.log("test log")
// объявляем переменные
// только number

// const var1 = 24
// let var2 = 'index'
// // alert(var2)
// console.log(var2, var4)
// const var4 = false
// var var3 = true

// const var4 = null
// const var5 = undefined

// ссылочный тип данных 

// const arr1 = [1, 2, 3, 4, 5]
// console.log(arr1)
// for (let i = 0; i = arr1.length; i++) {
//     if (i > 2) {
//     console.log(arr1[i], 'it works')
//     } else {
//         console.error('it doesn\'t work')
//     }
// }

// фугкция - 
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 4, 3, 5, 6, 7, 1, 0, 0, 6]

// let counter = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         counter += 1
//     }
// }

// console.log(counter)
// const counter = 24

// function someFunction() {
//     console.log(counter)
// }
// someFunction()


// // стрелочная
// const someFunction2 = () => {
//     return console.log(counter)
// }

// someFunction2()

// console.log(() => counter)

// в стрелочной функции автоматически врне return
// дженерики, интерфейсы, типы


// развернуть список
let arr1 = [1, 2, 3, 4]

// function reverseArr(arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(reverseArr(arr1))

// запросы в js - 
// скриптики

// проверить строку - палиндром ли она

// палиндром
const pal = 'Abccba'
const noPal = 'Abcsf'

const func = (word) => {
    let newWord = word.toLowerCase()
    let revWord = newWord.split('').reverse().join('')
    console.log(newWord)
    console.log(revWord)
    if (newWord === revWord) {
        console.log('yes')
    }
    else {
        console.log('no')
    }

}

func(pal)

// палиндром
function palindromeChecker(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[lastIndex - i]) {
        return false;
      }
    }
    return true;
  }