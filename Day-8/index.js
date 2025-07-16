/**
 * functions in javascript
 * funtion is a block of code, it can be used for re-arrange our code , it can be used any number of times,Named functions are hoisted.
 * functions are different types:-
 * 
 * 1.Named functions
 * 2.First class fuctions
 * 3.Arrow functions
 * 4.anonymous function
 * 5.constructer function
 * 6.call back function
 * 7.Higer order function
 * 8.Lower Order function
 * 9.pure functions
 * 10.Impure functions
 * 11.default parameter function
 * 12.opational parameter function
 * 13 reset function
 * 14.Immediate invoked function
 * 15.Generatore function
 * 
 * 
 * sy:-
 * function defination
 * 
 *     function functionName([parameters){
 *    //statements
 *         [return]
 *    }
 * 
 * function defination is always strored in function Name
 * 
 * function calling
 * 
 * functionName([arguments])
 * 
 * 
 */

function demo() {
    console.log("data printed");

}
// console.log(demo());
console.clear();

function coocking() {
    console.log("enter Kitchen");
    console.log("cooking started");
    del()
    console.log("cooking completed");


}
function del() {
    console.log("Taking del");
    console.log("return back to kitchen");


}
coocking()

console.clear()


function one() {
    console.log("one");
    three()
    console.log("three");


}
function two() {
    console.log("Four");

}
function three() {
    console.log("one");
    two()
    console.log("two");

}
one()
two()
console.clear();

console.log(a);

function funOne() {
    console.log(a);
    var a = 10;

    funTwo()

}
function funTwo() {
    console.log("function Two");
    funThree()

}
function funThree() {

    console.log("function Three")
}
funOne()















