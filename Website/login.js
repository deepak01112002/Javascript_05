document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
     
    fetch(`http://localhost:3000/users?email=${email}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        if(res.length == 0){
            alert("Email Invalid")
        }else{
            if(res[0].password == pass){
                alert("Login Successfull")
                window.location.href = "index.html"
            }else{
                alert("Password Incorrect")
            }
        }
    })
    .catch((err)=>{
        console.log(err)
    })
 
    
 })