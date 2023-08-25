const getVar = () => {
    setTimeout(function () {
        console.log(`A function that takes some time`);
    }, 3000);
}

const printSomething = () => {
    console.log('Another Function');
}
// getVar();
// printSomething();

/* ====== Setting with callback Function ========= */

const getVarCallback = (callback) => {
    setTimeout(() => {
        console.log(`A Function that takes some time`);
        callback();
    }, 3000);
}

const printSomethingCallback = () => {
    console.log(`Another Function`);
}
getVarCallback(printSomethingCallback);