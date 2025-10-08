
// let resultwindow;
// function openWindow(){
//   resultwindow=  window.open("https://example.com/","","width=500px,height=500px")
// //   resultwindow.document.write(`
// //     <!DOCTYPE html>
// //     <html>
// //         <head><title>BOM</title>
// //         <style>
// //              h3{
// //              text-align:center;
// //              color:green;
// //              }
// //         </style>
// //         </head>
// //         <body>
// //            <h3>Opening a window</h3>
// //         </body>
// //     </html>

// //     `)


// }
// function closeWindow(){
//     let flag=window.confirm(resultwindow)
//     if(flag){
//         resultwindow.close()
//     }else{
//         alert("thankyou")
//     }
// }

// window.setInterval(()=>{
//     window.location.reload()
// },1000)

// let result = null
// window.setInterval(() => {
//     let i = 1;
//     result = window.location.reload()
//     console.log(i++)
// },1000)
// let result=null;
// function start(){
//     let i=1
//   result= window.setInterval(()=>{
//        let date=new Date()
//         console.log(`HH:${date.getHours()}`)
//    },1000)
// }
// function stop(){
//      window.clearInterval(result)
// }

// localStorage.setItem("name","Ravi")
// alert(localStorage.getItem("name"))

function saveData(){
    let input =document.querySelector("input")
    
    localStorage.setItem("name",input.value)
    
}