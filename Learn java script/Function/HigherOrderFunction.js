
function functionOne(){
    console.log("i am a higher order function");
}

function functiontwo(){
    console.log("i am a call back function");
}

functionOne(functiontwo());

function add(callback,a,b){
    callback(20,10);
    console.log(a+b);
    
}

function sub(a,b){
    console.log(a-b);
}

add(sub,10,10);