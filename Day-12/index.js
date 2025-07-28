/**
 * 
 * First class function
 * anonymous function
 * higher order function
 * callback functions
 */

// function sum(callback){
//     console.log("something happend");
//     callback()

// }
// sum(function(){
//     console.log("anonymous function");

// })

/**
 * 
 * Arrow functions in javascript
 * It is a short hand property of anonymousfunction
 * 
 * 
 * a function which is not having a function keyword and function name which is represented in arrow is known as arrow function
 * 
 * arrow function has implicit return type
 * syn:-
 * ([parameters])=>{
 * //statements
 * }
//  */
// let a=b=>console.log(b+10);


// a(10)

// let sum=a=>a+10

// console.log(sum(10));

// let sum=num=>(num%2==0)? "even" : "Odd"
// console.log(sum(2));

// function sample(callback1,callback2){
//     callback1()
//     callback2()
// }

// function x(){
//     console.log("x");

// }
// function y(){
//     console.log("y");

// }
// sample(x, y)

// sample(function(){
//     console.log("x");

// }, function(){
//     console.log("y")

// }

// )


// sample(()=>console.log("X"),()=>console.log("Y"))

function sample(callback1, callback2) {
    console.log(callback1(10));
    console.log(callback2(20));


}
sample(a=>a+10,a=>a+10)
// sample(
//     function (a) {
//     return a + 10
// }, function (a) {
//     return a + 10
// })


setTimeout(()=>{
console.log("Asynchronous");

},2000)





