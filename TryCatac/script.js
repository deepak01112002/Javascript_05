function divide(a,b){
   if(b ==  0){
    throw new Error("Adhaar no is Compulsory to fill the form")
   }
   if(b == 5){
     throw new Error ("Can't divide with 5")
   }
   return a / b;
}

try{
   for(var x=0; x<10; x++){
      if(x == 3){
         throw new Error("X is equal to 3")
      }
      console.log(x)
   }
   
}catch(err){
   console.log(err)
}finally{
    console.log("Code completed")
}

