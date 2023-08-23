let array = ['hello', 1, 2, 3, 'bangla', 4, 5, 6, 7, 'World', 8, 0, 9];

let someMethodCheck = array.some(function (anElement) {
    return anElement === 9;
});
console.log(someMethodCheck());