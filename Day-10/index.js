/**
 * 
 * 
 */
// function one(a,b){
//     console.log("One");
//     return a+b+two(a,b)
    
// }
// function two(a,b){
//     console.log("two");
//     return a*b
    
// }
// console.log(two(12,10)+one(12,10));

/**
 * Callbacks in javascript
 * 
 * a function which is passing an arugement through another function defination to function parameter
 * 
 * callbacks are mainly used in asynchronous operations and classes etc.,
 * 
 * callbacks are mainly named as named functions,anonymousfunctions,arrowfunctions
 * 
 */

// function sayHi(callback){
//     console.log(callback);
//     callback()
   
// }
// function sayHello(){
//     console.log("Hello");
    
// }


// sayHi(sayHello)

// function x(a,b){
//     console.log("X Function");
//     console.log(a(10,20));
    
//     b()
    
// }
// function y(i,j){
//     console.log("y function");
//     return i+j
    
// }
// function z(){
//     console.log("Z Function");
    
// }
// x(y,z)

// function a(callback){
//     console.log("Data Printed.......");
//     console.log(callback);
//     callback()
    
    
// }
// a(function b(){
//     console.log("another function");
    
// })

/**
 * scopes in javscript
 * var vs let vs const
 * 
 * variable identifier=value;//intilization
 * 
 * variable var can be re-in and re-dic and re -assign
 * variable disclared in outside the function global scope
 */
// var a=10;
// var a=40;
// a=43;
// var a;
// console.log(a);

// function a(){
//     var b=10;
//     console.log(b)
// }
// a()
// console.log(b);

// if(true){
//    var a=10
//    console.log(a);
    
// }
// console.log(a);

// const a=30;
// function print(){
//     var a=30;
//     let b=40;
//     const c=50;
    
    
// }
// print()
// console.log(a);
// console.log(b);
// console.log(c);

// {
//     var a=30;
//     let b=40;
//     const c=50;
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(a);
// let a=20;

const a=30;
// a=40;
console.log(a);


