// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, 9];

// let newArr = arr.filter(function (item) {
//     return item % 2 === 0;
// });

// console.log(newArr);

/* ======= Using filter in function with default 3 parameters ======== */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.filter(function (item, index, fullArr) {
    console.log(`Item: ${item}, Index = ${index} and FullArray = ${fullArr}`);

    return item % 2 === 0;
});

console.log(newArr);

// /* ======= Using filter in function in ES 6 ======== */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.filter((item) => item % 2 === 0);

// console.log(newArr);