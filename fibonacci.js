
let first = 0;
let second = 1;
let next ;
console.log(first+"\n"+second)
for(let x=1; x<=8; x++){
    next = first + second
    first = second;
    second = next;
    console.log(next)
}