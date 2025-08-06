/**
 * 
 * 
 */
// let promise1=new Promise((resolve,reject)=>{
// reject()
// })
// promise1.then(data=>console.log("success"))
//         .catch(data=>console.warn("failure"))

// let URL = "https://fakestoreapi.com/products"
// fetch(URL)
//     .then((data) => {
//         return data.json()
//     }).then(data=>{
//         for(let i=0;i<data.length;i++){
//             console.log(data[i].price)
//         }
//     })

fetch("https://dummyjson.com/todos")
    .then(response => response.json()
    
    ).then(data => {
    //    console.log(data.todos)
     for(let i=0;i<data.todos.length;i++){
                    console.log(data.todos[i].id)
        }
    
    }).catch(data=>console.log("error"))
