/**
 * 
 * GET POST
 * PUT
 */

let options={
    "method":"DELETE",
    // "headers":{
    //     "Content-Type":"application/json"
    // },
    // "body":JSON.stringify({
       
    //     "name":"Monkey"
    // })
}
fetch("http://localhost:8000/data",options)
.then(response=>{
    if(response.ok){
        console.log(response.statusText)
    }else{
        console.log("Not eneter")
    }
})
