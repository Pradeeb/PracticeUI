let empolyee ={
    empolyee:"valan",
    slary:2560,
    introYourself: function(a,b){
        console.log("test =",a+b);
        console.log(this.empolyee);  // it call local Object vale
        
    }
}

// console.log(empolyee);
 //empolyee.introYourself(5,6);

let empolyee1 ={
    eName:"valan",
    slary:2560,
    introYourself: (a,b)=>{
        console.log("test =",a+b);
        console.log(this.empolyee);  // it call global vale
        
    },
}

// console.log(empolyee1.empolyee);
 empolyee1.introYourself(5,6);

//********************** */ call()
let person={
    PFName:'valan',
    PSName:'Pradeeb'
}

let person1 ={
  
    id:10,
    // PFName:"valan",
    // PSName:"Pradeeb",     //incase thes properties not have 
    introYourself:function(a,b){
    //    console.log(this.PFName+" "+ this.PSName,a,b);
        
    },
    add:function(a,b){
     //   console.log("test =",a+b);
//console.log(this.id);  // it call global vale
        return a+b;
    }
}

//person1.introYourself();
//person1.introYourself.call(person,10,20);
 person1.introYourself.apply(person,[10,20]);

// let newfan = person1.add.bind(person,10,11)

// console.log(newfan());


// java script function protype method
   
// SYNTAX
//function.prototype.call(extra data,arguments with comma separet)
//function.prototype.apply(extra data,arguments like array)
//function.prototype.bind(extra data,arguments with comma separet)

let arrr=[1,56,8,4,5,82,6,7,10];

//In Build funtion example
let minvalue=Math.max(1,56,8,4,5,82,6,7,10);
 //call()
let call_learn=Math.min.call(null,1,56,8,4,5,82,6,7,10); 
console.log("Call() =>",call_learn);

let applyl_learn=Math.max.apply(null,arrr);    //pass the areqment like array 
console.log("Apply()  =>",applyl_learn);

let bind_learn=Math.max.bind(null,1,56,8,4,5,82,6,7,10); // its same to call but we call the function bind_learn()
console.log("bind()  =>",bind_learn());

// Manuall funcion example
function add(a,b){
    let c=this.c || 0;
    console.log(c);
    
    return a+b+c;
}
const value=add(10,10); //you can't add here extra data so we use function proto type methods
console.log(value);

let call1=add.call({c:10},10,10);  //like same apply and bind
console.log(call1);




