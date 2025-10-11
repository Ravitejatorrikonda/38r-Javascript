/**
 * BOM:-
 * 
 * functions:-
 * callback
 * arrow
 * named fun
 * promises
 * fetch
 * asynch and await
 * 
 * 
 * DOM:-
 * -----
 * 
 * getelementById
 * getElementsBy ClassName
 * queerySelectore
 * Querry selectoreAll
 * 
 * 
 * className
 * id
 * SetAttribute
 * 
 * 
 * 
 */

// let item=document.createElement("div")
// item.innerHTML=`Hello There`
// document.body.appendChild(item)
// console.log(item);


async function getData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let products = await res.json()
    showData(products)
}

function showData(products) {
    let container = document.getElementsByClassName("container")[0]
    products.forEach(product => {
        let item = document.createElement("div")
        item.innerHTML = `
    <img src=${product.image}>
    <h3>id :${product.id}</h3>   
    <p>title: ${product.title}</p> 
    <p>Price: ${product.price}</p> 
    <p>Desc: ${product.description}</p> 
    `
        container.appendChild(item)
    });


}




getData()
