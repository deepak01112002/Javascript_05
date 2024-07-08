
// // TNRN
// function add(){
//     let a = 10;
//     let b = 20;
//   console.log(a+b)
// }


// add()

// // TNRS

// function add1(){
//     let a = 10;
//     let b = 20;
//   return a+b
// }


// let a = add1()
// console.log(a)


// // TSRN

// function add2(b,a){
//   console.log(a+b)
// }


// add2(10,20)

// // TSRS

// function add3(b,a){
//     return a+b
//   }
  
  
//   let d = add3(10,20)
//   console.log(d)


  // Nested Function 
//   function Inner(){
//     console.log("Inner")
//   }
//     function Outer(){
//         console.log("Outer")
        
//         Inner()

//     }

//     Outer()


    // CLosure Function 


    function d(){
        let a = 10;
        function Inner(){
            console.log(a)
        }
    }

    d()