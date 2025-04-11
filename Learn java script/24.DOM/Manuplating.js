
function manipulateElement(){

    let newListElement = document.createElement("li");
    /* 
     newListElement.innerText="new item 4"
     newListElement.innerHTML="<li>link</li>"
     newListElement.textContent="<li>link</li>"

     console.log(newListElement);

     */

     let inputvalue=document.querySelector("input");
    // console.log(inputvalue.value);
     newListElement.innerText=inputvalue.value
     
    // console.log(newListElement);

     let orderList=document.querySelector("ol")
     orderList.append(newListElement);

     
}