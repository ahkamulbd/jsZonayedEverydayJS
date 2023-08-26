// const aDemoPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve('Resolve it.');
//         }
//         else {
//             reject('Reject it.');
//         }
//     }, 3000);
// })

// const data = aDemoPromise;
// console.log(data);

// // try {
// //     const data = aDemoPromise;
// //     console.log(data);
// // }
// // catch {
// //     console.log(err);      Remarks: try ..... catch method doesn't work
// // }
// aDemoPromise
//     .then((data) => {
//         console.log(data);
//     })

/* ######### Uses of async & await ########## */

// const aPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve('I am here.');
//         }
//         else {
//             reject('No! It is an error');
//         }
//     }, 3000);
// })

// // const promiseHandle = async () => {
// //     const data = await aPromise;
// //     console.log(data);
// // }
// // promiseHandle();

// // Solving with try .... catch

// const aPromiseRejection = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             reject('No ! It is an error !');
//         }
//         else {
//             resolve('I am here');
//         }
//     }, 3000);
// })

// const promiseWithErrorHandle = async () => {
//     try {
//         const data = await aPromiseRejection;
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// promiseWithErrorHandle();

/* ######### Handling more promises ########## */

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve('Promise 1 resolved !!!!!');
//         }
//         else {
//             reject('Promise 1 rejected !!!!!!');
//         }
//     }, 3000);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve('Promise 2 resolved !!!!!!');
//         }
//         else {
//             reject('Promise 2 rejected');
//         }
//     }, 3000);
// })
// // console.log('Promise All Returns: ', Promise.all([promise1, promise2]));

// const handleMultiplePromise = async () => {
//     const data = await Promise.all([promise1, promise2]);
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[1]);
// }
// handleMultiplePromise();


/* ========== Real Example =========== */

const getMyName = new Promise((resolve) => {
    return resolve('Amima');
});

const getAge = (name) => {
    return new Promise((resolve, reject) => {
        if (name === 'Amima') {
            resolve(8);
        }
        else {
            reject('Not Found !!!!');
        }
    })
}

// getMyName
//     .then((name) => {
//         getAge(name)
//             .then((age) => {
//                 console.log(`My name is ${name} and I am ${age} years old !!!!!`);
//             })
//     })

// With async - await

const getMyDetails = async () => {
    const name = await getMyName;
    const age = await getAge(name);
    console.log(`My name is ${name} and I am ${age} years old !!!!!`);
}
getMyDetails();