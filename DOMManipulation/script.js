let mainDiv = document.querySelector(".mainbox")
let arr = [
    {name : "193", height : "2.3 ft"},
    {name : "Dhol", height : "0.255ft"},
    {name : "Jiyan" , height : "19.5ft"}
]

let d = JSON.stringify(arr)
console.log(d)


let c = JSON.parse(d);
console.log(c)

// console.log(arr)


function view(){
  let box1 = document.createElement('div')
  let Image1 = document.createElement('img')
  box1.setAttribute('class','box1')
  Image1.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAI94hxtB6PUlap4G8BrVprPSEsLRAAWx-A&s')
  let box2 = document.createElement('div')
  let Image2 = document.createElement('img')
  box2.setAttribute('class','box2')
  Image2.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAI94hxtB6PUlap4G8BrVprPSEsLRAAWx-A&s')
  let box3 = document.createElement('div')
  let Image3 = document.createElement('img')
  box3.setAttribute('class','box3')
  Image3.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAI94hxtB6PUlap4G8BrVprPSEsLRAAWx-A&s')
  box1.append(Image1)
  box2.append(Image2)
  box3.append(Image3)
  mainDiv.append(box1,box2,box3)
}

view()