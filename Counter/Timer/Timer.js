document.getElementById("start").addEventListener("click",()=>{
    let val = document.getElementById("data").value
    let a;
   
       a = setInterval(()=>{
           if(val > 0){
            val--
            document.getElementById("val").innerText = val;
           }else{
            clearInterval(a)
           }
        },1000)
    
})