// HOF => Higher Order Function

// If we pass a function as argument in a function than that 
// function is called as Higher Order function 

//Example :-  .map , .forEach , .filter , .reduce  


let arr = [1,2,32,5,6,5,63]


let data = arr.map((el)=>{
     if(el%2==0){
          return el;
     }
})
console.log(data)



console.log("-----------------------------------------")

arr.forEach((el,index)=>{
     if(el%2==0){
          console.log(el)
     }
})

console.log("-----------------------------------------")


let d = arr.filter((el,index)=>{
     if(el%2==0){
          return el;
     }
})

console.log(d)