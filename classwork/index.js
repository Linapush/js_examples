// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// let response = fetch("myImage.png");
// let blob = response.blob();

// // на паре

let resp = function () {
    let arr = [1, 2, 3]
    let i = 0
    while ( i < arr.length) {
        console.log(arr[i])
        i++
    }
}

let timeout = setTimeout(resp, 5000)

let timeout2 = setInterval(resp, 5000)

function showText() {
    let text = 'asgds'
    console.log(text.slice(1, 3))
}

let variable = new String('aglaei')
console.log(variable)