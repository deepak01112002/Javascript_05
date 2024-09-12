
fetch("https://fakestoreapi.com/products")  // promise
.then((res)=>{
   return res.json()
})
.then((res)=>{
    document.querySelector(".productBox").innerHTML=view(res)
})
.catch((err)=>{
   console.log(err)
})




function view(arr){

   return arr.map((el,i)=>{
        return `
          <div class="box">
             <div>
                 <img src="${el.image}" alt="${el.title}" width="150px" height="150px"/> 
             </div>
             <div>
                  <p>${el.title}</p>
                  <p>Price :- ${el.price}</p>
                  <p>Category :- ${el.category}</p>
             </div>
          </div>
        
        `
    }).join("")

}