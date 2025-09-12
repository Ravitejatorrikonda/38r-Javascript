/**
 * 
 * 
 */

async function getData() {
    try {
        let response = await fetch("http://localhost:8000/data", { "method": "GET" })
        if (!response.ok) {
            throw new Error("data not found")
        }
        let data = await response.json()
        printData(data)
    } catch (error) {
        console.log("Data Failed to fetch");

    }
}

function printData(data) {
    //table creation
    let table = document.createElement("table")
    //table heading creation
    let thead = document.createElement("thead")
    let trow = document.createElement("tr")
    let headings = ["id", "title", "price", "description", "category", "image"]
    headings.forEach(ele => {
        let th = document.createElement("th")
        th.innerText = ele
        trow.appendChild(th)
    })
    //table body creation

    let tbody = document.createElement("tbody")
    data.forEach(obj => {
        let tr = document.createElement("tr")
        for (let key in obj) {
            let td = document.createElement("td")
            if (key !== "rating") {
                if (key === "image") {
                    let img = document.createElement("img")
                    img.src = obj[key]
                    td.appendChild(img)
                    tr.appendChild(td)
                } else {
                    td.innerText = obj[key]
                    tr.appendChild(td)
                }
            }
        }
        tbody.appendChild(tr)
    })



    thead.appendChild(trow)
    table.append(thead,tbody)
    // table.appendChild(tbody)
    document.body.appendChild(table)
}
// printData()

getData()