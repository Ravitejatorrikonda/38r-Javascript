/**
 * 
 * callbacks in javascript
 * scopes
 * callback:-
 * 
 * syn:-
 * function functionName([parameters]){
 * //statements
 * return values
 * }
 * functioncalling(anotherFunctionname)
 */
// function funOne(callback){
//     callback(10,20)
// }
// function funTwo(a,b){
//     console.log(a+b);

// }
// funOne(funTwo)
function funThree(a, b, c) {
    var result = b(a) + c(a + 10)
    console.log(result);

}
// function funFour(x){
//     return x*2
// }
// function funFive(x){
//     return x*5
// }
// funThree(14,

//     funFive,
//     function funFour(x){
//     return x*2
// })

function add(callback) {
    console.log("First Function");
    callback()
}
//a function which is taken  a parameter as a callback is known as higher order function
function sum(a, b) {
    console.log("second function");

}
add(sum)
console.clear()


// function funFour(x) {
//     return x * 2
// }
// function funFive(x) {
//     return x * 5
// }
// funThree(14,

//     funFive,
//     function funFour(x) {
//         return x * 2
//     })

function a(x){
    console.log("named function");
    // b()
    
}
// function b(){
//     console.log("another function");
    
// }
a(
    function b(){
    console.log("another function");
    
}
)
console.clear()
/**
 * 
 * anonymous function:-
 * 
 * a function which is not having a function Name is known a aqnonymous function
 * anonymous function stored in a variable
 * 
 * sy:-var a=function([parameters]){
 * //statements
 * [return]
 * }
 */

// var a=function x(){
//     console.log("anoymous function");
    
// }
// a()

// function a(callback){
//     callback()
// }
// a(function x(){
//     console.log("another anonymous function");})






// var a=function (){
//     console.log("Hello There");
    
// }
// a()



// var x=function (){
//     console.log("data printed");
    
// }
// x()
function a(callback){
console.log("data printed");
callback()
}

a(
    function (){
    console.log("data 2 printed");
    
}
)



