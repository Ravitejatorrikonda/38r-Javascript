/**
 * 
 * 
 */
// let options={
//     "method":"DELETE"
// }
// fetch("http://localhost:3000/todo")
// .then(response=>response.json())
// .then(data=>{
//     for(let i=0;i<data.length;i++){
//         fetch(`http://localhost:3000/todo/${data[i].id}`,options)
//         .then(res=>{
//             if(res.ok){
//                 console.log(res.statusText)
//             }else{
//                 console.log("data No Deleted")
//             }
//         })
//     }
// })
data= [
    {
      "id": 1,
      "todo": "Do something nice for someone you care about",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": true,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": true,
      "userId": 68
    },
    {
      "id": 4,
      "todo": "Watch a documentary",
      "completed": false,
      "userId": 84
    },
    {
      "id": 5,
      "todo": "Invest in cryptocurrency",
      "completed": false,
      "userId": 163
    }]

    let options={
        "method":"Post",
        "headers":{
            "Content-Type":"application/Json"
        }
    }
    for(let i=0;i<data.length;i++){
        // console.log(data[i])
        let obj=data[i]
        options.body=JSON.stringify(obj)
        fetch("http://localhost:3000/todo/",options)
        .then(res=>{
            if(res.ok){
                console.log(res.statusText)
            }else{
                console.log("data Not Post")
            }
        })
    }