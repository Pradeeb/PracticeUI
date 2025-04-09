
let object1={
    name : "valan"
}

let arr=[1,2,3];

let obj2=object1;
let arr1=arr;

arr1[1]=5
obj2.id=12; //it affect object1

console.log(object1,obj2) 
console.log(arr1,arr) 

 // call by referance create in heap memory it change if modify value.