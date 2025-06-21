function f1(){
    console.log("First");
}
function f2(){
    console.log("Second");
}
function f3(){
    console.log("Third");
}
function f4(){
    console.log("Four");
}

//Asynchronize 
//
// because the methods are run one by one setTimeout is ASYC method
// if F2 function take logn time so f3() is run 

f1();
setTimeout(f2,2000)
f3();
setTimeout(f4,500)