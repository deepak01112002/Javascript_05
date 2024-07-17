let a = "deepak,pandey"
let str = ""
for(let x=0; x<a.length; x++){
    if(x==0 || a[x-1] == " "){
        str+=a[x].toUpperCase()
    }else{
        str+=a[x]
    }
}
let arr = str.split(",")


console.log(arr.join("#"))


// console.log(a.toLowerCase())
// console.log(a.toUpperCase())


