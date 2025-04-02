let useProfile={
    userName:"pradeeb",
    age:30,
    eyeColor:"black",
    hairColor:"black",
    eat: function (){
       console.log("eating");
       return "vanial icecream";
    }
}

//console.log(useProfile.hairColor,useProfile.age,useProfile.eat());


const vehicle ={
    type:"four wheeler",
    price:2000,
    "Fuel Type":"Petrol",  // key have string advantage we can give space
    "ModelName":"BMW"
}

console.log(vehicle.ModelName)
console.log(vehicle["Fuel Type"]) //we cant use .notations if key have space


//sort hand assign property

const user="valan";
const age=25;

const userdetails={
    user,
    age
}
console.log(userdetails.user)