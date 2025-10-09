/**
 * function:-
 * ----------
 * named functions
 * callback
 * arrow function
 * callback hell:-
 * -----------------
 *     ->promises
 *     ->async and await
 *     
 * ->DOM:-
 *    API
 *    Events
 *    BOM
 *        ->one class
 * 
 * 
 * named functions:-
 * ------------------
 * sy:-
 * 
 * function defi:-
 * ------------------
 *      finction FunName([parameters]){
 * //statements
 * [return]
 * }
 * function calling:-
 *         FunName(arguments)
 */

// function getData(callback){
//     console.log("Hello There 1")
//     callback(10)
// }

// getData(a=>console.log(a))


/**
 * 
 * Promise
 * 
 */

// let promise1 = new Promise((resolve, reject) => {
//     resolve("success")
// })
// promise1.then(res=>console.log(res)).catch((data)=>{console.log(data)})

// Promise.resolve("success").then(res=>console.log(res))
// Promise.reject("failure").catch(res=>console.log(res))
// console.log(Promise.resolve("success").then(res=>console.log(res)));


// console.log(1)
// console.log(2)
// setTimeout(()=>{
// console.log(3)
// },2000)
// console.log(1)
// console.log(1)


// fetch:-
// ----------
/**
 * Fetch("URL")->return, promise object
 * 
 */



// let arr=[1,2,3, 4,5,undefined]
// let print=function(element,index,arr){
//     console.log(element,index,arr)
// }

// arr.forEach((ele,ind,arr)=>console.log(ele))





// fetch("https://dummyjson.com/todos")
// .then(res=>res.json())
// .then(data=>console.log(data.todos))

/**
 * 
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */
// let options = {
//     "method": "POST",
//     "headers": {
//         "Content-Type": "applicatio/json"
//     },
//     "body": JSON.stringify({
//         "id": "5",
//         "name": "bindu"
//     })

// }

// fetch("http://localhost:3000/data", options)
//     .then(res => {
//         if (res.ok) {
//             console.log(res.status, res.statusText)
//         } else {
//             console.log("data not Posted");

//         }
//     }
//     ).catch(data => console.log(data))



async function getData() {
  let res=await fetch("http://localhost:3000/data");
  let data=await res.json()
  
}
getData()
