let num=[1,2,3,4,5,6]

let one=num[0] //retrun 1 is a default destructer

let [a,b,c,d,e] =num;

console.log(a,b,c);  //1 2 3

let [a1,,,d1,e1] =num;
console.log(a1,d1,e1);  //1 4 5

let [x,y,...z] =num;
console.log(x,y,z);   //1 2 [ 3, 4, 5, 6 ]

// nested array

let nesstedArray=[1,2,[3,4,[5,6]]]

let [v1,v2,[v3,v4,[v5]]]=nesstedArray;  //folow the sturcture

console.log(v5)
