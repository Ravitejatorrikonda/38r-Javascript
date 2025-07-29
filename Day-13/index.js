/**
 * 
 * Arrow function
 * 
 * 
 * synchronus vs asynchronous
 * 
 */

// function x() {
//     console.log("x");
//     y()

// }
// function y() {
//     console.log("y")
// }
// x()

// function x(){
//     console.log("x")
// }
// function y(){
//     setTimeout(() => {
//         console.log("y")
//     }, 3000);
// }
// function Z() {
//     setTimeout(() => {
//         console.log("Z")
//     }, 1000);
// }
// y()
// Z()
// x()


function sample1() {
    console.log("Named Function start 1")
    setTimeout(() => {
        console.log("Named Function End 1")
    }, 3000)
}

// function sample2(){
//     console.log("start 2");
//     setTimeout(()=>{
//         console.log("End 2")
//     },4000)

// }
// function sample3(){
//     console.log("Start 3");
//     setTimeout(()=>
//     {
//         console.log("End 3");

//     },1500)

// }
// sample2()
// sample1()
// sample3()

function sum(val, callback) {
    console.log("sum start");

    setTimeout(() => {
        callback(val + 10)
    }, 3000)
    console.log("sum End");

}
function sub(val, callback) {
    console.log("sub start");
    
    setTimeout(() => {
        callback(val - 5)
    }, 1000);
    console.log("sub End");
    
}
sum(10, (sumres) => {
    console.log(sumres)
})
sub(20, (subres) => {
    console.log(subres);

})


