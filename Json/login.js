
document.getElementById("loginForm").addEventListener("submit",async (e)=>{
    e.preventDefault()
    let email = document.getElementById("email").value
    let password =document.getElementById("password").value
    let d = await fetch("http://localhost:3000/users")
    let data = await d.json()
    
    let val = data.filter((el)=>el.email == email)
    console.log(val)
    if(val.length == 0){
        alert("first Register")
        window.location.href = "index.html"
    }else{
        if(val[0].pass == password){
            alert("Login Successfull")
            window.location.href = "home.html"
        }else{
            alert("Wrong Passsword")
        }
    }
    
})