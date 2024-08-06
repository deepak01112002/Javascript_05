
let button = document.querySelectorAll("button");
let heading = document.querySelector("#value")
// console.log(button)

let str = ""
button.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(el.value != "=" && el.value != "C"){
            str += el.value
            heading.value = str
        }else if(el.value == "="){
            heading.value = eval(str)
            str = ""
        }else if(el.value == "C"){
            str = ""
            heading.value = ""
        }
    })
})
