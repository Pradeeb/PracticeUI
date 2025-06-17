let useProfile = {
  userName: "pradeeb",
  age: 30,
  eyeColor: "black",
  hairColor: "black",
  eat: function () {
    console.log("eating");
    return "vanilla ice cream";
  },
  favoriteFoods: [
    { name: "biriyani", type: "rice", spicy: true },
    { name: "dosa", type: "tiffin", spicy: false },
    { name: "ice cream", type: "dessert", spicy: false }
  ]
};
//console.log(useProfile.hairColor,useProfile.age,useProfile.eat());
/*
// Access full array
console.log(useProfile.favoriteFoods);

// Access 1st food name
console.log(useProfile.favoriteFoods[0].name); // biriyani

// Access 2nd food type
console.log(useProfile.favoriteFoods[1].type); // tiffin

// Access 3rd food spicy value
console.log(useProfile.favoriteFoods[2].spicy); // false
*/
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