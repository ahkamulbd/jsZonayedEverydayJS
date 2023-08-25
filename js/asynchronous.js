function getVar() {
    var x;
    setTimeout(function () {
        x = 12;
    }, 3000);

    return x;
}
var value = getVar();
// console.log(`The Value is: ${value}`);
// console.log(`The Value is: ${value}`);

console.log(`JavaScript : 1`);
console.log(`JavaScript : 2`);
setTimeout(() => {
    console.log(`JavaScript : 3`);
}, 3000);
console.log(`JavaScript : 4`);
console.log(`JavaScript : 5`);
console.log(`JavaScript : 6`);
console.log(`JavaScript : 7`);
