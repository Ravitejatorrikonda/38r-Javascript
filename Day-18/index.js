/**
 * 
 * 
 */
// fetch("https://fakestoreapi.com/products")
//     .then(response => {
//         return response.json()

//     })
//     .then(data => {
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i].description)
//         }
//     })

//GET,POST,PUT,PATCH,DELETE

// let options={
//     "method":"POST",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "id":"4",
//         "name":"pravalika"
//     })
// }
// fetch("http://localhost:3000/students",options)
// .then(response=>
// {
//     if(response.ok){
//         console.log(response.statusText)
//     }else{
//         console.log("data not shared");
        
//     }
// }
// ).catch(data=>console.log(data))
fetch("http://localhost:3000/students",{
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "id":"4",
        "name":"soap"
    })
})
.then(response=>{
    if(response.ok){
        console.log(response.statusText)
    }else{
        console.log("Not created");
        
    }
})