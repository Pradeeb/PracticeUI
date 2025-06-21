let employees=[
    {empolyeeName:"valan",salary:200000},
    {empolyeeName:"joshap",salary:10000},
    {empolyeeName:"Guruvila",salary:20000},
    {empolyeeName:"amith",salary:11000}
]

//************    Filter 

/*
  1. filter return multuple value compare the find
  2. filter method us iterate array like for each
  3. it support chaninnig method
*/

//  1. filter return multuple value compare the find
let filterValue=employees.filter(value => value.salary>10000);
//console.log(filterValue);

//  2. filter method us iterate array like for each
employees.filter(value =>console.log(value));

//  3. it support chaninnig method
let filterchain=employees.filter(value => value.salary>10000).fill({id:1,name1:"Test"});
//console.log(filterchain);

//************    Find 

/*
  1. find return single value
  2. it support chaninnig method
*/

let findOne=employees.find((value,index)=>{
//    console.log(index++)
    return value => value.salary<10000;
})

console.log(findOne);