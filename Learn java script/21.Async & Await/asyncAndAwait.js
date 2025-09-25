let newPromise = new Promise((resolve, reject) => {
   let is = true;

   if (is) resolve("success");
   else reject("reject");
});

async function run() {
    try {
        let message = await newPromise;
        let newMessage = await newPromise;
        console.log(message);
        console.log(`new message :${newMessage}`);
        
    } catch (error) {
        console.error(error);
    }
}

run();
console.log("Last line");
