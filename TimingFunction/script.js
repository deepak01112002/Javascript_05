// setTimeOut
// setInterval

// let count = 10
// let a = setInterval(()=>{
//     console.log(count--)
// },1000)


// setTimeout(()=>{
//   clearInterval(a)
//   console.log("Counter stopped")
// },10000)
let images =[
    "https://i.pinimg.com/236x/e9/c0/28/e9c0286ddccb4c4a334a33721bbd502d.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2022/9/DN/PE/IK/38768188/ashirwad-atta-1-kg.jpg",
    "https://4.imimg.com/data4/LE/VP/MY-8266815/dhol-instruments-500x500.jpg",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/007c19e5-f766-4719-b2c4-9baff9070bf2/jumpman-mvp-shoes-JV1HCs.png",
    
]
let a = 0;

setInterval(()=>{
    if(a < images.length-1){
        a++
    }else{
        a = 0
    }
    console.log(a)
    document.querySelector("#image").setAttribute("src",images[a])
    document.querySelector("#image").setAttribute("width","150px")
},2000)


