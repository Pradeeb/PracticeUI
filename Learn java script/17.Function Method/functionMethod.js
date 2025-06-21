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