function f1(){
    console.log("First");
}
function f2(){
    console.log("Second");
}
function f3(){
    console.log("Third");
}

//Asynchronize 
//
// because the methods are run one by one setTimeout is ASYC method
// if F2 function take logn time so f3() is run 

f1();
setTimeout(f2,2000)
f3();