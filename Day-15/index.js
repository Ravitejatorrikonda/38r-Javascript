/**
 * 
 * 
 */
// function sum(val, callback) {
//     setTimeout(() => {
//         callback(val + 10)
//     }, 1000);
// }
// function sub(val, callback) {
//     setTimeout(() => {
//         callback(val - 5)
//     }, 3000);
// }
// function mul(val, callback) {
//     callback(val * 5)
// }
// function div(val, callback) {
//     callback(val / 2)
// }
// sum(10, (sumres) => {
//     sub(sumres, (subres) => {
//         mul(subres, (mulres) => {
//             div(mulres, (data) => {
//                 console.log(data)
//             })
//         })
//     })

// })

/**
 * 
 * Promises in javascript
 * ->it mainy used for to perform asynchronous operations
 * ->it defines a state,weather it is fullfilled or reject
 * 
 * syntax:-
 *      variable refvariable=new Promise(callback)
 *      
 * 
 */
// let promise1 = new Promise((resolve, reject) => {
//    reject()
// })
// promise1.then(()=>{console.log("success")
// }).catch((data)=>console.log("failure"))

// function exicute(callback) {
//     return new Promise(callback)
// }
// exicute((resolve, reject) => {
//     resolve()
// }).then(data=>console.log("success"))
// Promise.resolve().then(data=>console.log("success"))
// Promise.reject().catch(data=>console.log("failure"))

// function A(){console.log("A")}
// function B(){console.log("B")}
// function C(){console.log("C")}
// function D(){console.log("D")}
// A()
// setTimeout(B,0)
// Promise.resolve().then(C)
// D()
// let promise1 = new Promise((resolve, reject) => {
//     console.log("start")
//     setTimeout(() => {
//         resolve()
//     }, 1000);

// })
// promise1.then(data=>{console.log("Promise Function success")})
// console.log("End");

let promise1=new Promise((resolve,reject)=>{
    console.log("Promise 1")
    setTimeout(() => {
        resolve("Promise 1 success")
    }, 1000);
})
let promise2=new Promise((resolve,reject)=>{
    console.log("Promise 2")
    setTimeout(() => {
        resolve("promise 2 success")
    }, 3000);
})
let promise3=new Promise((resolve,reject)=>{
    console.log("Promise 3")
    setTimeout(() => {
        resolve("promise 3 success")
    }, 1500);
})
// promise1.then((data)=>console.log(data))
// promise2.then((data)=>console.log(data))
// promise3.then((data)=>console.log(data))
promise1.then((data1)=>{
    console.log(data1)
    promise2.then((data2)=>{
        console.log(data2)
        promise3.then(data3=>{
            console.log(data3)
            
        })
    })
})

