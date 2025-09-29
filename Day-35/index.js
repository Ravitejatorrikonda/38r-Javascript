/**
 * 
 * closures & Lexical Scope
 */

// function a(sum){
//     let add=sum
//     function b(sum){
//         add+=sum
//         console.log(add)
//     }
//    return b()
// }
// let b=a(10)
// b(4)

// const createCounter=(initialvalue)=>{
//    let counter=initialvalue
//    return (initialvalue)=>{
//         counter +=initialvalue
//         console.log(counter);
        
//    }

// }
// let addcounter=createCounter(10)
// addcounter(5)

// for(let i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000*i)
// }

// let reg=new RegExp("/^abc$/")
// console.log(reg.test("abc"))
let reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])+.{8,16}$/
if(reg.test("aA7#efhvd")){
   document.getElementById("input").style.outline=red
    
}else{
console.log("password invalid")
}


