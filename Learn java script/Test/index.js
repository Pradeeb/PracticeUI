const start = () =>{
   

   const getValue=document.querySelector("input");
   const getData=getValue.value;
 //window.alert(getData);

  const getUnoderList=document.querySelector("ul");

 const newElement = document.createElement("li");
 newElement.innerText=getData;
 newElement.style.color="blue";
 getUnoderList.appendChild(newElement)

 getValue.value="";

}