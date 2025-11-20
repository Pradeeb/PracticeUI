fetch("https://fakestoreapi.com/users")
.then(res=>{
    if(!res.ok){
      return new Error("data not fond")
    }else{
        return res.json()
    }
} )
.then((data => console.log(data)))
.catch((error)=>{
    console.log(error);
    
})

console.log("Test")