/**
 * promises in jaavascript
 * sy:-
 * 
 * variable refvariable=new Promise(callback)
 * 
 */

// function sum(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val + 10)
//     })
// }
// function sub(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val - 5)
//     })
// }
// function mul(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val * 5)
//     })
// }
// function div(val) {
//     return new Promise((resolve, reject) => {
//         resolve(val / 2)
//     })
// }
// sum(10).then(sumres => sub(sumres))
//     .then(subres => mul(subres))
//     .then(mulres => div(mulres))
//     .then(divres => console.log(divres))




// function sub(val, callback) {
//     callback(val - 5)
// }
// function Mul(val, callback) {
//     callback(val * 5)
// }
// function div(val, callback) {
//     callback(val / 2)
// }
// sum(10, (sumres) => {
//     sub(sumres, (subres) => {
//         Mul(subres, (mulres) => {
//               div(mulres,(divres)=>{
//                       console.log(divres)
//               })
//         })
//     })
// })


function order(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} placed`)
        resolve()
    })
}
function dispatch(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} dispatch`)
        resolve()
    })
}
function shipping(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} shipping`)
        resolve()
    })
}
function deliver(orderId) {
    return new Promise((resolve, reject) => {
        console.log(`order${orderId} delivered`)
        resolve()
    })
}


order("1234").then(() => dispatch("1234"))
              .then(()=>shipping("1234"))
              .then(()=>deliver("1234"))
              .then(()=>console.log("delver success"))

//  async function call(){
//     await order(1234)
//     await dispatch(1234)
//     await shipping(1234)
//     await deliver(1234)
// }
// call()


















// order("1234").then(() => {
//     console.log("order success")
// })
// dispatch("1234").then(()=>console.log("dispatch success"))


// function dispatch(orderId,callback){
//     setTimeout(() => {
//         console.log(`order${orderId} dispatched`)
//         callback()
//     }, 1000);
// }
// function shipping(orderId,callback){
//     setTimeout(() => {
//         console.log(`order${orderId} shipped`)
//         callback()
//     }, 1000);
// }
// function deliver(orderId,callback){
//     setTimeout(() => {
//         console.log(`order${orderId} delivered`)
//         callback()
//     }, 1000);
// }
// order("1234",()=>console.log("orderok"))
// dispatch("1234",()=>console.log("dispatch ok"))
// shipping("1234",()=>console.log("shipping ok"))
// deliver("1234",()=>console.log("delver ok"))




// order("1234",()=>{
//     dispatch("1234",()=>{
//         shipping("1234",()=>{
//             deliver("1234",()=>{
//                 console.log("deliver success")
//             })
//         })
//     })
// })

