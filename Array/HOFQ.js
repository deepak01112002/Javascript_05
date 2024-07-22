
function getEvenNumber(arr){
 let d = arr.filter((el)=>{
     return el%2==0
  })
 
  return d;

}



let ans = getEvenNumber([1,2,3,4,5,6,7,8,9,10])
console.log(ans)



function areaCalculator(arr){
    let d = arr.map((el)=>{
        return el*el;
     })
    return d;
}


let a = areaCalculator([2, 4, 6, 8])
console.log(a)