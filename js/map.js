/* ======= With ES 5 ======== */

//var arr = [1, 2, 3, 4, 5, 6, 7];

// var anotherArray = [];
// for (var i = 0; i < arr.length; i++) {
//     anotherArray.push(arr[i] * arr[i]);
//     // console.log(anotherArray);
// }
//console.log(anotherArray);

/* ======= Using map ======== */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function getSquare(item) {
//     return item * item;
// }
// const newArr = arr.map(getSquare);
// console.log(newArr);

/* ======= Using map in function ======== */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// let newArr = arr.map(function (item) {
//     return item * item;
// })
// console.log(newArr);

/* ======= Using map in function in ES 6 ======== */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, 9];

// let newArr = arr.map((item) => item * item);

// console.log(newArr);

/* ======= Using map in function in ES 6 with default 3 parameters ======== */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, 9];

let newArr = arr.map(function (item, index, fullArr) {
    console.log(`Item: ${item}, Index = ${index} and FullArray = ${fullArr}`);
});

console.log(newArr);


