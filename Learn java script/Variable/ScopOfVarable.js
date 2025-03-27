

function scopofVariable() {
    let iamLetOnMainBlock =  "i am a let main block varibe";
    if (true) {
        var iamVar = "i am a var varibe";
        let iamLet =  "i am a let varibe";
        const iamConst =  "i am a const varibe";
        console.log("inside Block"+iamVar);
        console.log("inside Block"+iamLet);
        console.log("inside Block"+iamConst);
        console.log("Main Block"+iamLetOnMainBlock); // we can accesss the nested block
    }
    console.log("Outside Block"+iamVar);  // var is a function scope we can access out side the function

 //  console.log("Outside Block"+iamLet);  // we can not accesss out side the block

 //  console.log("inside Block"+iamConst);  // we can not accesss out side the block
}

scopofVariable();