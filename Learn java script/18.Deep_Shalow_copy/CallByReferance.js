
// Example of Object for call by referance
let obj1={
    name : "valan"
}
let obj2=obj1;
obj2.id=12; //it affect object1
console.log(obj1,obj2) 

// Example of Array for call by referance
let arr=[1,2,3];
let arr1=arr;
arr1[1]=5
console.log(arr1,arr) 

 // call by referance create in heap memory it change if modify value.