fetch(`http://localhost:3000/cart`)
.then((REs)=>REs.json())
.then((res)=>{
    Total(res)
    document.getElementById("box").innerHTML = view(res)
    
})
.catch((err)=>{
    console.log(err)
})


function Total(res){
    let sum = 0;
    res.forEach(element => {
        sum+=element.price
    });
    // return sum;
    document.getElementById("total").innerText = sum;
}


function view(arr){
  
    return arr.map((el)=>{
        return `<div id="childBox">
                <div>
                   <img src="${el.image}" width="150px" height="150px"/>
                </div>
                <div>
                    <p>${el.title}</p>
                </div>
        </div>`
    })







}