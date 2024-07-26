function red(){

    let arr = [
    {
        quote : "Honesty is Best Policy",
        person : "M.H. Gandhi"
    },
    {
        quote : "Hudle makes you best developer",
        person : "Deepak pandey"
    },
    {
        quote : "Nothing is Impossible",
        person : "Jiyan"
    }
   ]


   let number = Math.floor(Math.random()*arr.length);

   document.getElementById("quote").innerHTML = `<h1>arr[number].quote</h1>`



















}
