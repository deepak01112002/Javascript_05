let number = 50000; 
let count = 0
while(number>0){
    number = Math.floor(number/10)
    console.log(number)  
    count++
}
console.log(count)