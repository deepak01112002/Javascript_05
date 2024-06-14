let number = 11;
let a = 1;
let count = 0;
while(a<=number){
    if(number % a == 0){
        count++
    }
    a++;
}

if(count == 2){
    console.log(number + " Prime Number")
}else{
    console.log(number + "Not a prime number")
}