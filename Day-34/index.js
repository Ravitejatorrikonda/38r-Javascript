/**
 * 
 * 
 */

// let btn1=document.getElementById("btn1")
// btn1.onclick=()=>{
//     alert("clciked on Me")
// }
// let btn2=document.getElementById("btn2")

// btn1.addEventListener("click", ()=>{
//     document.body.style.background="red"
//     btn2.remove()
// })

let btn = document.getElementById("btn1")
btn.addEventListener("click", async () => {
    let res = await fetch("http://localhost:3000/data")
    try {
        if (!res.ok) {
            throw new Error("Data Not Getting")
        }
        let data = await res.json()
        showData(data)
    } catch (error) {
        console.log(error);

    }
})
function showData(data) {
    let container = document.getElementsByClassName("container")[0]
    data.forEach(obj=>{
        let item = document.createElement("div")
        item.innerHTML = `
        <img src='${obj.image}'>
        <h3>${obj.title}</h3>
        <p>${obj.description}</p>
        
        `
        // let delebtn=document.getElementsByClassName(`btn-${index}`)
        // delebtn.onclick=()=>{
        //     item.remove()
        // }
        

        let delebtn = document.createElement("button")
        delebtn.innerText = "Remove"
        delebtn.onclick = () => {
            item.remove()
        }
        item.appendChild(delebtn)
        container.appendChild(item)
    });
}



