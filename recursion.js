

// function add(a){
    
//     if(a<=0){
//         return;
//     }
//     console.log("hello")

//     return add(a-1)

// }



// add(5)


// addition question ---------------------------------->


function add(b){
  if(b<=1){
     return 1;
  }
   let sum = 1
   sum *= b * add(b-1)
   return sum;
}


console.log(add(5))

//5 + 4 + 3 + 2 + 1
