//sort()

/*
 1. normaly sort metho using ASCCI 
 2. call back function use sort ASC DSCE
*/

let num=[1,5,8,6,2,7];

let sortASC=num.sort((a,b)=>  a-b);
console.log(sortASC); //[ 1, 2, 5, 6, 7, 8 ]

let sortDSCE=num.sort((a,b)=>  b-a);
console.log(sortDSCE); // [ 8, 7, 6, 5, 2, 1 ]


//some 
console.log(num.some(value => value%2 == 0));  // true

//sort 
console.log(num.every(value => value%2 == 0));  // flase


