
// pop()
// push()
// shift()
// unshift()
// slice()
// flat()
// sort()
// reverse()
// includes()

let arr =[1,2,3,4,5,6]

let removeLast=arr.pop();   // remove last element  & return the removed value

//console.log(removeLast,arr);


arr.push(7,8,9,10)  // add the new element at last possition

console.log(arr);

let removeFirst=arr.shift();
console.log(removeFirst,arr);

arr.unshift(1);
console.log(arr);

let slicearr=arr.slice() //create new array as copy

let slicearr1=arr.slice(1) //create new array as copy give starting position

let slicearr2=arr.slice(1,5) //create new array as copy give starting position and end posstion

console.log(slicearr2);

let arrOne=[1,2,[5,6,[7,8]],10];
let ans=arrOne.flat(2);
console.log(ans);

let arrr=[1,5,6,9,8,1,2,10,4,45,"&"," "]

//sort using ASCCI value 
arrr.sort();

//its doesn't give the coppy it affect the orginal array
console.log(arrr);

arrr.reverse();
//its doesn't give the coppy it affect the orginal array
console.log(arrr);

//return true value
console.log(arrr.includes(9));