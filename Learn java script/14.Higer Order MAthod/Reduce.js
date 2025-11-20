/*
reduce() is a higher-order function available on arrays.
It takes a callback function and reduces the array to a single value.

----structure-------

array.reduce((accumulator, currentValue) => {
    // logic
}, initialValue);

------Parameters----------
Name	            Meaning

accumulator	    Stores the result of previous operations
currentValue	Current element in the array
initialValue	(Optional) starting value of accumulator

*/
const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

//Ex 2
const arr1 = [10, 50, 20, 80, 30];

const max = arr1.reduce((acc, curr) => acc > curr ? acc : curr);

console.log(max); // 80

//Ex 3
const users = [
  { id: 1, name: "Pradeep" },
  { id: 2, name: "Arun" }
];

const map = users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {});

console.log(map);
// {1: "Pradeep", 2: "Arun"}

