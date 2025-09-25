async function getData() {
    let res = await fetch("http://localhost:3000/student")
    try {
        if (!res.ok) {
            throw new Error("Data Not Getting");

        }
        let data = await res.json()
        showdata(data)
    } catch (error) {
        console.log((error));

    }

}
function showdata(data){
    let container=document.getElementById("container")
    data.forEach(ele => {
        let item=document.createElement("div")
        item.innerHTML=`
        <p>Name:${ele.name}</p>
        <img src='${ele.img}'>
        `
        container.appendChild(item)
        
    });
}
document.addEventListener("DOMContentLoaded", getData)