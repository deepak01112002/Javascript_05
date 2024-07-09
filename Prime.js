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

for(let x=1; x<=50; x++){
    if(isPrime(x)){
        console.log(x)
    }
}

