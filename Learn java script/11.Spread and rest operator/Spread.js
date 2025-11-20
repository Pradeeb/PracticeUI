// Array

let name=["valan","pradeeb"];
let name1=["nazeem","mohamadhu"];
let compain=name+name1;
//console.log(compain);

let allNames=[...name,...name1];

// console.log(allNames);

let addName=[...allNames,"arul","selva"];
// console.log(addName);

// Object

let empolye={
    id:12,
    name:"valan"
}

let empolyeRole={
    ...empolye,
    role:"developer",
    expirience:4
}

console.log(empolyeRole)