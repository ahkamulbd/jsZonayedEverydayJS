let loopInObject = {
    Bangladesh: 'Dhaka',
    India: 'New Delhi',
    Nepal: 'Kathmandu',
    Pakistan: 'Islamabad',
    Srilanka: 'Kolombo',
    Afganistan: 'Kabul'
}

// for (name in loopInObject) {
//     console.log(`Country: ${name}, Capital: ${loopInObject[name]}`);
// }

let countries = Object.keys(loopInObject);
let capitals = Object.values(loopInObject);

console.log(countries);
console.log(capitals);

/* ===== By using ES6 Syntax ========= */

// Object.keys(loopInObject).map(function (countries) {
//     console.log(countries);
// })
// Object.keys(loopInObject).map((countries) => console.log(countries));
// Object.values(loopInObject).map((capitals) => console.log(capitals));