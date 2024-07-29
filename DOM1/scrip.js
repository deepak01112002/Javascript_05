document.addEventListener("DOMContentLoaded",()=>{


    //  document.querySelector("button").addEventListener("click",()=>{
    //     console.log("BUtton Clicked")
    //  })
 let arr = []
  document.querySelector("form").addEventListener("submit",(a)=>{
     a.preventDefault()
    // console.log(e)
    let obj = {
        username : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    }
    arr.push(obj)
    console.log(arr)
  })
  


  console.log(eval("25+5"))













});
