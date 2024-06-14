
document.getElementById("productForm").addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = {
        title : document.getElementById("title").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value
    }
    fetch("http://localhost:3000/products",{
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
    fetch("http://localhost:3000/products")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
       document.getElementById("data").innerHTML = view(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}



function view(arr){
    console.log(arr)
   return arr.map((el)=>{
        return `<div>
         <img src=${el.img} alt=${el.title}/> 
         <h1>${el.title}- ₹${el.price}</h1>
         <button onclick="del('${el.id}')">Delete</button>
         <button onclick="edit('${el.id}')">Edit</button>
         <button>ADD tO CART</button>
        </div>`
    }).join("")

}



fet()

function del(i){

    fetch(`http://localhost:3000/products/${i}`,{
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
    fetch(`http://localhost:3000/products/${i}`)
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
            fetch(`http://localhost:3000/products/${res.id}`,{
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

