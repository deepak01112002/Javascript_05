//home

let arr = []

document.getElementById("productForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = {
        title : document.getElementById("title").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value
    }
    fetch("https://mockserver-xqg9.onrender.com/products",{
        method : 'POST',
        headers :{
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
    })
    .catch((er)=>{
        console.log(er)
    })
})

function fet(){
    fetch("https://mockserver-xqg9.onrender.com/products")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        arr = res
       document.getElementById("data").innerHTML = view(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}



function view(arr){
    console.log(arr)
   return arr.map((el)=>{
        return `<a href="singleProduct.html?key=${el.id}"><div>
         <img src=${el.img} alt=${el.title}/> 
         <h1>${el.title}- ₹${el.price}</h1>
         <button onclick="del('${el.id}')">Delete</button>
         <button onclick="edit('${el.id}')">Edit</button>
         <button>ADD tO CART</button>
        </div></a>`
    }).join("")

}



fet()

function del(i){

    fetch(`https://mockserver-xqg9.onrender.com/products/${i}`,{
        method : 'DELETE',
        headers :{
            'Content-type' : 'application/json'
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
    })
    .catch((er)=>{
        console.log(er)
    })



}

function edit(i){
    document.getElementById("update").style.display = "block"
    fetch(`https://mockserver-xqg9.onrender.com/products/${i}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
         
        document.getElementById("title").value = res.title
        document.getElementById("price").value = res.price
        document.getElementById("img").value = res.img
        document.getElementById("update").addEventListener("click",()=>{
            let obj = {
                title : document.getElementById("title").value,
                img : document.getElementById("img").value,
                price : document.getElementById("price").value
            }
            fetch(`https://mockserver-xqg9.onrender.com/products/${res.id}`,{
                method : "PUT",
                headers : {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify(obj)
            })
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                console.log(res)
            })

        })
    })
    .catch((err)=>{
        console.log(err)
    })
}


// function single(id){
//     window.location.href = "singleProduct.html"
//     localStorage.setItem("id",JSON.stringify(id))
// }

document.getElementById("sort").addEventListener("change",()=>{
   console.log(document.getElementById("sort").value)
  let d = arr.sort((a,b)=>+a.price - +b.price)
  document.getElementById("data").innerHTML = view(d)
})