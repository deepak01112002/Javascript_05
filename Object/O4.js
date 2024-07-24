let obj = {
    name : "a",
    grid : 1235,
    html : 25,
    css : 26
}

let obj1 = {
    name : "b",
    grid : 5432,
    html : 25,
    css : 26
}

let arr = []

arr.push(obj)
arr.push(obj1)


let sum = 0
for(let x=0; x<arr.length; x++){
    console.log(arr[x].html)
}

arr.forEach((el)=>{
    sum += el.html
})

console.log(sum)