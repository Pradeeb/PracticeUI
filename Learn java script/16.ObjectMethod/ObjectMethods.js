
/*
 1.create();
 2. assign();
 3. keys();
 4.values();
 5.freeze();
 6.is Frozan();

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

// 3. key()
let getKeys=Object.keys(person)
console.log(getKeys);

// 4. values()
let getValues=Object.values(person)
console.log(getValues);

// 5.entries()
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
