

//Implicit

console.log(10+true);  // 10+1=11 beacue true value is 1
console.log(10+false); // 10+0=10 beacue false value is 0
console.log(10+undefined); //Nan
console.log(10+null); //10
console.log(10+[1,2,3]); // 101,2,3 its a string out because array is covert string


//Explicit
console.log(Number("10")+10);
console.log(Number(true)+10);
console.log(Number([1,2])+10);
console.log(Number("")+10);
console.log(Number(null)+10);