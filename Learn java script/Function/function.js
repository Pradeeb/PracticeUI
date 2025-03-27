
let person1={
    age:26,
    name:"valan"
}

//without parameter
function printUserName(){
   console.log("Person name :"+person1.name)
}


//with parameter
function printUserName(username,password){ 

    console.log("Person password :"+password)

    if(password){
        console.log("Person name :"+person1.name)
        console.log("Person username :"+username)
       
    }
 }
 


//printUserName("pradeeb","Test@123");
//printUserName("pradeeb");


//with parameter default value
function printUserName(username="valan",password="Test"){
    console.log("Person username :"+username);
    console.log("Person password :"+password);
 }
 
 //printUserName("pradeeb","Test@123");
 //printUserName("pradeeb",undefined);
 printUserName(undefined,undefined);
