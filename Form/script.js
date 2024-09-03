let arr = [];

document.querySelector("#ExistingUser").addEventListener("click",()=>{
    document.querySelector(".login").style.display = "block"
    document.querySelector(".Signup").style.display = "none"
})

document.querySelector("#sinUser").addEventListener("click",()=>{
    document.querySelector(".login").style.display = "none"
    document.querySelector(".Signup").style.display = "block"
})

document.querySelector("#form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let email = document.querySelector("#email").value
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value

    let obj = {
        email,
        username, 
        password 
    }

    arr.push(obj)
    console.log(arr)

})


document.querySelector("#Loginform").addEventListener("submit",(e)=>{
   e.preventDefault()
   let loginEmail =  document.querySelector("#Loginemail").value
   let loginPass = document.querySelector("#Loginpassword").value
   let d = arr.filter((el)=>{
      if(el.email == loginEmail && el.password == loginPass){
         return el;
      }
   })
   if(d.length > 0){
    Swal.fire({
        title: "Login Successfull",
        text: "Click on Button to Close the Dialog Box",
        icon: "success"
      });
   }else{
    alert("Login Unsuccessfull")
   }
})