function view(){

   let num =  document.getElementById("val").value


  for(let x=1; x<=num; x++){
     if(PrimeCheck(x)){
        console.log(x)
     }
  }



  function PrimeCheck(a){
    let count = 0
    for(let x=1; x<=a; x++){
        if(a%x==0){
            count++
        }
    }
    
    if(count == 2){
        return true;
    }else{
        return false
    }


  }










}

