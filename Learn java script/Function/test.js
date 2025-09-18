
function firstName(fName){
 console.log("First name :",fName);
}

function secondName(sName){
 console.log("Second name :",sName);
}

function Name(Name,callName){
    callName(Name);
}


Name("valan",firstName);
Name("Pradeeb",secondName);