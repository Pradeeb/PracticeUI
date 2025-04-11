// Event hadler start from  On 

/*
  1. one button have a handler only
*/

let button2= document.getElementById("handler");

button2.onclick =()=>{
    console.log("First Handler");
}

button2.onclick =()=>{
    console.log("second Handler");
}


//Event listner methos

/*
  1. one button have a multiple listener we can give
*/

let button1= document.getElementById("listener");

button1.addEventListener("click",()=>{
    console.log("First Lister");
    
})

button1.addEventListener("click",()=>{
      console.log("second Lister");
})
