
/*


let newPromise = new Promise((resolve, reject,pending) => {
    let response = false;

    if (response) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});


newPromise.then(
    (success)=>{
       console.log(success);
    }
).catch(
    (fail)=>{
        console.log(fail);
    }
    
).finally(
    ()=>{
        console.log("end");
    }
);

*/

// create call back hell  and below ia not ASYNC


function fetchProfile(successFun, failFun) {
    let is=true;

    if(is){
        successFun("sucess...");
    }else{
        failFun("fail")
    }

}

fetchProfile(
    (suncess)=>{console.log(suncess);
        fetchProfile( (suncess)=>{console.log("Next "+suncess);}, (error)=>{console.log("Next "+error);});
    },
    (error)=>{console.log(error);}
)

console.log("test");