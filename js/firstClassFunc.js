/* ============ Passing Function as an argument ============= */

function callMyFunction(name, callback) {
    let myAge = 20;
    callback(myAge);
    console.log(`Is it interesting? Yes, it is Mr. ${name}`);
}

function hello(age) {
    console.log(`I am passed through argument and my age is: ${age}`);
}

//callMyFunction('Amima Hoque', hello);

/* ============ Returning Function from Function ============= */

function welcomeMsg(name) {
    console.log(`Welcome Mr. ${name}.`);

    return function options(menu) {
        console.log(`Do you like ${menu}, Mr. ${name} ?`);
    }
}

//welcomeMsg('Towhid')('Coffee');

/* ============ Storing Function as a variable ============= */

let functionVariable = function (name) {
    console.log(`I am simply a function and my name is ${name}.`);
}

let anotherVariable = functionVariable;

anotherVariable('Callback Function');