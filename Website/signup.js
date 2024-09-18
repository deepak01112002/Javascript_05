

document.getElementById("form").addEventListener("submit",(e)=>{
   e.preventDefault()
   let email = document.getElementById("email").value
   let pass = document.getElementById("password").value
   let username = document.getElementById("username").value
   let obj = {
      email : email,
      password : pass,
      username : username
   }
   fetch(`http://localhost:3000/users?email=${obj.email}`)
   .then((res)=>res.json())
   .then((Res)=>{
       if(Res.length > 0){
         alert("Email already Registered")
       }else{
         
          add(obj)
       }
   })
   .catch((er)=>console.log(er))

  
})


function add(obj){
   fetch(`http://localhost:3000/users`,{
      method : "POST",
      headers : {
        'Content-Type' : "application/json"
      },
      body : JSON.stringify(obj)
  })
  .then((Res)=>{
   return Res.json()
  })
  .then((res)=>{
   console.log(res)
  })
  .catch((err)=>{
   console.log(err)
  })
}