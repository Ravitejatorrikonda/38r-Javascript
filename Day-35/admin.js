async function fetchData() {
    let res = await fetch("http://localhost:3000/student")
    try {
        if (!res.ok) {
            throw new Error("Data Not Getting");

        }
        let data = await res.json()
        showdata(data)
    } catch (error) {
        console.log(error);

    }

}

function showdata(data) {
    let container = document.getElementById("container")

    // item.innerHTML = data.map((student) => {
    //     return `
    //     <p>id: ${student.id}</p>
    //     <p> ${student.name}</p>
    //     <button id='deletebtn${student.id}'>Delete</button>
    //     <button id='editbtn${student.id}'>Edit</button>
    //     `
    // }).join("")
    data.forEach(student => {
        let item = document.createElement("div")
        item.className = "main"
        item.innerHTML = `
    <p>id: ${student.id}</p>
      <p> ${student.name}</p>
      <button id='deletebtn${student.id}'>Delete</button>
       <button id='editbtn${student.id}'>Edit</button>
    
    `
        container.appendChild(item)
        
         let deletebtn = document.getElementById(`deletebtn${student.id}`)
        let edibtn = document.getElementById(`editbtn${student.id}`)
        deletebtn.onclick = () => {
            DeleteBtn(student.id)
        }
        edibtn.onclick = () => {
            editData(student.id)
        }
    })



    // data.forEach(student => {
        // let deletebtn = document.getElementById(`deletebtn${student.id}`)
        // let edibtn = document.getElementById(`editbtn${student.id}`)
        // deletebtn.onclick = () => {
        //     DeleteBtn(student.id)
        // }
        // edibtn.onclick = () => {
        //     editData(student.id)
        // }
    // });


}
//Deleting the data
async function DeleteBtn(id) {
    let res = await fetch(`http://localhost:3000/student/${id}`, { "method": "DELETE" })
    try {
        if (!res.ok) {
            throw new Error("Data Not Deleted");
        }
        alert("Data Successfully Deleted")

    } catch (error) {
        console.log(error);

    }

}
async function editData(id) {
    let studentId = document.getElementById("id")
    let name = document.getElementById("name")
    let image = document.getElementById("image")
    let res = await fetch(`http://localhost:3000/student/${id}`)
    try {
        if (!res.ok) {
            throw new Error("data not getting");

        }
        let data = await res.json()
        studentId.value = data.id
        name.value = data.name
        image.value = data.img

    } catch (error) {
        console.log(error);

    }

}












async function saveData() {
    let studentId = document.getElementById("id").value
    let name = document.getElementById("name").value
    let image = document.getElementById("image").value
    let obj = {
        "name": name,
        "img": image
    }
    let studentMethod = studentId ? "PUT" : "POST";
    let URL = studentId ? `http://localhost:3000/student/${studentId}` : "http://localhost:3000/student";
    let res = await fetch(URL, {
        "method": studentMethod,
        "headers": {
            "content-Type": "application/json"
        },
        "body": JSON.stringify(obj)
    })
    try {
        if (!res.ok) {
            throw new Error("Data not updated");

        }
        alert("data updated successfully")
    } catch (error) {
        console.log(error);

    }

}

document.addEventListener("DOMContentLoaded", fetchData)