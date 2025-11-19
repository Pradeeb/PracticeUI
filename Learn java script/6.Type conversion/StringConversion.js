
//Implicit

// String + any  data type = String
console.log("hi"+10);
console.log(10+"hi");
console.log("hi"+[1,2,3]);
console.log("hi"+true);

// subraction not covert its show NaN
console.log("hi"-10);
console.log(10-"hi");
console.log("hi"-[1,2,3]);
console.log("hi"-true);



//Explicit
console.log("10"+String(10));
console.log(Number(true)+10);
console.log(Number([1,2])+10);
console.log(Number("")+10);
console.log(Number(null)+10);
