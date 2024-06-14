

document.getElementById("signupForm").addEventListener("submit",(e)=>{
    e.preventDefault()

    let obj = {
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        pass : document.getElementById("password").value
    }
    console.log(obj.email)
    fetch(`http://localhost:3000/users?email=${obj.email}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length>0){
            alert("User Is already registered")
        }else{
            fetch("http://localhost:3000/users",{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(obj)
            })
            .then((res)=>res.json())
            .then((res)=>{
                if(res){
                    alert("User successfully registered")
                    window.location.href = "login.html"
                }
            })
        }
    })
    

})

