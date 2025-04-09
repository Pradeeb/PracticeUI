function f1(){
    console.log("First");
}
function f2(){
    console.log("Second");
}
function f3(){
    console.log("Third");
}

//synchronize 
//
// because the methods are run one by one 
// if F2 function take logn time after complete then fun f3();

f1();
f2();
f3();