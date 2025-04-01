
//Implicit

console.log(10+true)      //10+1=11
console.log(10+false)       //10+0=10
console.log(false+undefined) //NaN
console.log(true+null)   //1+0=1

//Explicit
console.log(Boolean("")) //fasle
console.log(Boolean("valn")) //fasle

console.log(Boolean(0)) //fasle
console.log(Boolean(11)) //true
console.log(Boolean(-10)) //true

console.log(Boolean([1,2,3])) //true
console.log(Boolean([])) //true

console.log(Boolean(null)) //fasle
console.log(Boolean(undefined)) //fasle