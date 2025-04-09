//************************deep coppy 

/*
  primitve or nonprimitive both value are indepentd for deep coppy
*/

// primitive deep copy

let a=10;   // a & b have a deiferent address her both value are indenpendent
let b=a;
 a=12;
// console.log(a,b);

// Non-primitive deep copy

let person1={
    name:"valan"
}

let person2=person1; // its not a deep coppy because its it memory locarion same

let person3={...person1}  //spret operator use we can acchive deep coppy
person3.id=5;
// console.log(person1,person3);


//***************************shallow coppy

let user={
    name:"jony",
    role:"youtuber",
    hobbies:{
        game:"cricket"
    }
}

let user2 = {...user}
user2.role="baller"
// console.log(user2,user);

user2.hobbies.game="basket ball" // its a shallow coppy beacause its nested object memoryies are same address

// console.log(user2,user);

//nested object convert to deep copy

let user3 = {...user,hobbies:{...user.hobbies}}

user3.hobbies.game="basket ball test" 

// console.log(user,user3);


// ARRAY Shalow coppy

let num=[1,2,3,[4,5,6]];

// shallow coppy for array
let num1=[...num]

let arr=JSON.parse(JSON.stringify(num));


// num1[0]="one";
// num1[3][0]=7;

arr[3][0]=7;
console.log(arr,num);



//console.log(num1,num)


//now achive deep coppy



