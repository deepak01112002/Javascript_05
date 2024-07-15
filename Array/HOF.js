// HOF => Higher Order Function

// If we pass a function as argument in a function than that 
// function is called as Higher Order function 

//Example :-  .map , .forEach , .filter , .reduce  


let arr = [1,2,32,5,6,5,63]


let data = arr.map((el,i)=>{
     return el * el * el
})
console.log(data)

console.log("-----------------------------------------")

// arr.forEach((element,index)=>{
//     if(element % 2 == 0){
//         console.log(element)
//     }
// })