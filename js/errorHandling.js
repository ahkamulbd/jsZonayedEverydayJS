/* ========= try & catch Statement ========== */

// console.aula('THis is an error');

// try {
//     console.aula('THis is an error');
// } catch (err) {
//     console.log('Do anything here');
//     console.log(err);
// }


/* ========= through Statement ========== */

// const age = 19;

// try {
//     if (age < 18) {
//         throw 'You are too young';
//     }
//     else {
//         console.log('You are adult');
//     }
// } catch (err) {
//     console.log(err);
// }


/* ========= finally Statement ========== */

// try {
//     throw 'An error';
// }
// catch (err) {
//     console.log(err);
// } finally {
//     console.log('I will run always');
// }


/* ========= error Object ========== */

// const anError = new Error('This is an error object');
// console.log(anError);

const ageNew = 17;

try {
    if (ageNew < 18) {
        throw new Error('You are too young');
    }
    else {
        console.log('You are adult');
    }
} catch (err) {
    console.log(err);
}