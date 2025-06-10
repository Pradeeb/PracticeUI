
let fruits = ["apple", "banana", "orange", "pinapple", "lemen"]

// **************************** for each function 

/*
  1. foreach call back function done retrun any value
  2. We can not use chaninnig method beacue it dont return any think
*/
fruits.forEach(printFruite)

function printFruite(currentElement, index, totalArrays) {
     console.log(currentElement,index,totalArrays);
}

//************************   Map function 

/*
  1. Map call back function retrun a value
  2. We can use Chaninning method
*/

fruits.map(printAllFruite)

function printAllFruite(currentElement, index, totalArrays) {
    //    console.log(currentElement,index,totalArrays);

}

//1. Map call back function retrun a value
let neawArr = fruits.map((currentE, index) => {
    return { id: index++, FruiteName: currentE };
})

console.log(neawArr);

//2. Map chainning method
let neawArr1 = fruits.map((currentE) => {
    return currentE;
}).sort();

console.log(neawArr1);


//3. Map Condition return
let neawArr2 = fruits.map((current2) => {
    return current2=="apple";
});

console.log(neawArr2);



