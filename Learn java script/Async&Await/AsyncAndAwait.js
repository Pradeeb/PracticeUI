let newPromise = new Promise((fullfilled, failiure) => {

    let data = false;

    if (data) {
        fullfilled("date fetched successfully");
    } else {
        failiure("data not found");
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