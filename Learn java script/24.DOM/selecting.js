//selecting Element

let h1= document.getElementsByTagName("h1");
console.log(h1.innerHTML);

let p1=document.getElementsByClassName("p1")
console.log(p1.innerHTML);

let p3=document.getElementById("p3")
console.log(p3.innerHTML);


let head=document.querySelector("h1");
console.log(head.innerHTML);

let head1=document.querySelector(".p3");
console.log(head1.innerHTML);

let head2=document.querySelector("#p3");
console.log(head2.innerHTML);

// add new Element
let createElemnt=document.createElement("h2")
createElemnt.innerText="Test heading add";
 console.log(createElemnt);

 document.body.append(createElemnt)