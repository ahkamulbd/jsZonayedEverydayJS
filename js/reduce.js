// var arr = [1, 2, 3, 4, 5, 6];

// var total = arr.reduce(function (sum, item) {
//     return sum += item;
// }, 10)

// console.log(total);


/* ======= Using reduce with all parameters ======== */

// var arr = [1, 2, 3, 4, 5, 6];

// var total = arr.reduce(function (sum, item, index, fullArr) {
//     console.log(`Item: ${item}, Index: ${index}, FullArray: ${fullArr} & SumArrayElements = ${sum}`);

//     return sum += item;
// }, 0)
// console.log(total);


/* ======= Using reduce with ES6 Syntax ======== */

let arr = [1, 2, 3, 4, 5, 6];

const total = arr.reduce((sum, item) => sum += item);


console.log(`Sum of all Array Elements = ${total}`);