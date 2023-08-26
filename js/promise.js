// const aPromise = control => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (control) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 3000);
//     })
// }
// aPromise(true)
// aPromise(false)
//     .then(() => {
//         console.log('This is a success.');
//     })
//     .catch(() => {
//         console.log('This is a failure.');
//     })

/* ======== Handling More Promise ========= */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Promise 1 resolved.');
        }
        else {
            reject('Promise 1 rejected.')
        }
    }, 5000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Promise 2 resolved.');
        }
        else {
            reject('Promise 2 rejected.')
        }
    }, 0);
})

Promise.all([promise1, promise2])
    .then((dataArr) => {
        console.log(dataArr);
    })