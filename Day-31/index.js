/**document.links
 * document.body
 * document.image
 * 
 * methods:-
 * ---------
 * 
 * getElementById
 * getElementsByClassName
 * querrySelectore
 * QuerrySelectoreALL
 * 
 * div
 *    p:-id:1
 *    p:id:2
 * 
 */
// let div=document.getElementById("container")
// let arr=[{"id":1},{"id":2},{"id":3},{"id":4}]
// arr.forEach(obj=>{
//    let p=document.createElement("p")
//    p.innerHTML=`id:${obj["id"]}`
//    div.appendChild(p)
// })

let div=document.getElementById("container")
async function getData() {
    let res=await fetch("http://localhost:3000/produts",{"method":"GET"})
    let data=await res.json()
   printData(data)
    
}
function printData(data){
    data.forEach(obj => {
       let item=document.createElement("div")
       console.log(obj);
       
       item.innerHTML=
       `
       <h3>${obj.id}</h3>
       <p>${obj.title}</p>
       <img src='https://i.pinimg.com/236x/b6/9a/ef/b69aef4f7a74a7fe4d23e30626ac6464.jpg'></img>
       <p>${obj.price}</p>
       
       `
       div.appendChild(item)
    });
}

getData()


