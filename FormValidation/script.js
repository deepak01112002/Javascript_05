let form = document.querySelector("#form")
let arr = []

form.addEventListener("submit",(e)=>{
    let isValid = true
    e.preventDefault()
    // refreshing or deleting text from span tag
    document.querySelector("#usernameError").innerText = ""
    document.querySelector("#EmailError").innerText = ""
    document.querySelector("#PasswordError").innerText = ""

    // caught the value of input tag
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value;
     
    // check the condition for all the values
    if(username == ""){
      document.querySelector("#usernameError").innerText = "Username is Mandatory"
      isValid = false
    }else if(username.length<8){
      document.querySelector("#usernameError").innerText = "Character must be 8 in length"
      isValid = false
    }

    if(email == ""){
        document.querySelector("#EmailError").innerText = "Email is Compulsory" 
        isValid = false
    }

     if(password.length < 8){
        document.querySelector("#PasswordError").innerText = "password length must be 8" 
        isValid = false
     }

    console.log(isValid)
  if(isValid == true){
    let obj = {
        username : username,
        email : email,
        password : password
    }
    
   arr.push(obj)
   console.log(arr)
}




})