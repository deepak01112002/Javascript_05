//single 
async function view(){
  let d = new URLSearchParams(window.location.search)
  let id = d.get("key")
  // fetch(`http://localhost:3000/products/${id}`)
  // .then((res)=>{
  //   return res.json()
  // })
  // .then((res)=>{
  //   document.getElementById("data").innerHTML = v(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
   let data = await fetch(`http://localhost:3000/products/${id}`)
   let dee = await data.json()
   document.getElementById("data").innerHTML = v(dee)
}

view()





function v(el){
   

        return `<div>
         <img src=${el.img} alt=${el.title}/> 
         <h1>${el.title}- ₹${el.price}</h1>
         <button onclick="post('${el.id}')">ADD tO CART</button>
        </div>`
   

}

function post(el){
    
 fetch(`http://localhost:3000/products/${el}`)
  .then((res)=>{
    return res.json()
  })
  .then((res)=>{
    fetch("http://localhost:3000/cart",{
        method : 'POST',
        headers :{
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(res)
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
    })
    .catch((er)=>{
        console.log(er)
    })
  })
  .catch((err)=>{
    console.log(err)
  })
  console.log(obj)
    
}