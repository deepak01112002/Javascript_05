
let arr = JSON.parse(localStorage.getItem("cart")) || []
let mainBox = document.querySelector(".main")

function view(){
 
    arr.forEach((element,index) => {
        let box = document.createElement("div")
        let div1 = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src",element.IMAGE)
        let div2 = document.createElement("div")
        let p1 = document.createElement("p");
        p1.innerText = element.TITLE
        div2.append(p1)
        div1.append(image)
        box.append(div1,div2)
        mainBox.append(box)
    });



}
view()