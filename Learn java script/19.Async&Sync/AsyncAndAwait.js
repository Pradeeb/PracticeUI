let newPromise = new Promise((resolve, reject) => {

    let data = false;

    if (data) {
        resolve("date fetched successfully");
    } else {
        reject("data not found");
    }

}
)
    // newPromise.then(message => console.log(message))
    // console.log("last");



async function fetchData() {


    try{
        let message = await newPromise;   //await user for run code syschronized
        console.log(message);
    }catch(error){
        console.error(error);
    }
}


fetchData();