
/*
 1.create();
 2. assign();

*/

let person={
    personName:"valan",
    age:26
}

//  1. create(); proto type function are used here.
let newObject=Object.create(person);
newObject.localtion="tamilnadu"
console.log(newObject.localtion);
console.log(newObject.age);

//   2. assign();
let mergeObject=Object.assign(person,{role:"developer",id:10});
console.log(person);
console.log(mergeObject);
