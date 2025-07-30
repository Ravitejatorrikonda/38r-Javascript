/**
 * 
 * 
 */

// const { useCallback } = require("react");

// console.log("start");
// setTimeout(()=>{
//     console.log("first callabck")
// },3000)
// for(let i=0;i<50000;i++){
//     console.log("i")
// }
// setTimeout(()=>{
//     console.log("second callabck")
// },1000)


// function sum(val, callback) {
//     callback(val + 10)
// }
// function sub(val, callabck) {
//     callabck(val - 5);

// }
// function mul(val, callabck) {
//     callabck(val * 5)
// }
// function div(val, callabck) {
//     callabck(val / 2)
// }
// sum(10,(sumres)=>{
//     console.log(sumres)
// })
// sub(15,(subres)=>{
//     console.log(subres)
// })
// mul(10,(mulres)=>{
//     console.log(mulres)
// })
// div(10,(divres)=>{
//     console.log(divres)
// })

// sum(10, (sumres) => {

//     sub(sumres, (subres) => {

//         mul(subres, (mulres) => {

//             div(mulres, (divres) => {
//                 console.log(divres)
//             })
//         })
//     })
// })

function placeOrder(callabck) {
    
    setTimeout(()=>{
        console.log("order Placed")
            callabck("order dispatched")
    },2000)
  
}
function shipping(callback) {
    console.log("shipping started");
    callback("out of deliver")

}
placeOrder((data1) => {
    console.log(data1)
    shipping((data2) => {
        console.log(data2)
    })
})


