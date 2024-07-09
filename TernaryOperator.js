
let a = 50;
let b = 30;
let c = 12;
function isPrime(a){
    let count = 0;
    for(let x=1; x<=a; x++){
        if(a%x==0){
          count++
        }
    }
    if(count == 2){
      return true;
    }else{
      return false;
    }
  
  }

// if(a>b){
//     console.log(a)
// }else{
//     console.log(b)
// }

// if(a>b && a>c){
//     console.log(a)
// }else if(b>a && b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }

(a>b && a>c) ? console.log(isPrime(50)) 
    :(b>a && b>c) ? console.log(b) 
    : console.log(c)


// (a>b)? console.log(a) : console.log(b) 