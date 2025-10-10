/**
 * BOM:-
 * -----
 * Local storeage
 * ----------------
 * 
 * ->splice,map,filter,foreach,
 * 
 */
// localStorage.setItem("name","rakesh")
// console.log(localStorage.getItem("name"));


async function fetchData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let products = await res.json()
    localStorage.setItem("products", JSON.stringify(products))
    // displayData(products)

}

//FilterBtns

function filtercategory() {
    let products = JSON.parse(localStorage.getItem("products"))
    let data = products.map(product => product.category)
    // console.log(data)
    let set = new Set(data)
    //    console.log(set);

  let newArr=Array.from(set)
  let div =document.getElementById("btn-container")
  newArr.forEach(category=>{
    let btn=document.createElement("button")
    btn.textContent=category;
    btn.onclick=()=>{
        filterdata(category)
    }
    div.appendChild(btn)
  })
//   console.log(newArr)

}




//filter data
function filterdata(category) {
    // let cat = window.prompt("Enter Data as category wise")
    let products = JSON.parse(localStorage.getItem("products"))
    let filterData = products.filter(product => product.category == category)
    displayData(filterData)

}


//display Data
function displayData(products) {
    // let products = JSON.parse(localStorage.getItem("products")) || [];
    let container = document.getElementById("container")
    container.innerText = ""
    if (products.length == 0) {
        container.innerText = "Data Not Found"
    } else {
        products.forEach((product, index) => {
            let item = document.createElement("div")
            item.innerHTML = `
    <img src=${product.image}>
    <h3>id:${product.id}</h3>
    <p>Title:${product.title}</p>
    <p>Price:${product.price}</p>
    <p><b>Category:</b>${product.category}</p>
    <button onclick=deleteData(${index})>Delete</button>
    `
            container.appendChild(item)
        });

    }

}

//DeleteData
function deleteData(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products))
    displayData(products)
}

// fetchData()
window.onload = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    if (products.length == 0) {
        fetchData()
    } else {
        displayData(products)
        filtercategory()
    }
}