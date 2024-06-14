// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
let value = 10

for(let row=1; row<=value; row++){
    let a = ""
    for(let col=1; col<=value; col++){
        if(row == 1 ||col == value || row == value || col == 1 ||row == col || row + col == value+1){
          a+="* "
        }else{
            a+="  "
        }
        
    }
    console.log(a)
}