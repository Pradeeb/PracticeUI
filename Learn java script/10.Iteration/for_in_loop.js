
let students={
    name:"valan",
    year:1,
    sub:["chemistory","Physics","Maths","english"],
    practicals:{
        first:"physics lab",
        second:"chemistory lab"
    },
    do(){
        console.log("Studying");
    }

}

for(let ans in students){

    console.log(students[ans]);

}

let arr = [1,2,3,4,5,6,7,8,9];
for(let ans in arr){

    console.log(arr[ans]);

}


let str = "valan pradeeb"
for(let ans in str){

    console.log(str[ans]);

}