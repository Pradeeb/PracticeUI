import { useState } from "react";

function MultipleState() {
          
            const[color,setColor]=useState("Red");   
            const[model,setModel]=useState("R15 V3"); 
            const[company,setCompany]=useState("Yamaha"); 
            const[speed,setSpeed]=useState("145 km/h");  
           
            //object use set state
            const [MyBike,SetMyBike]=useState({
                color: "Red",
                model: "R15 V3",
                company: "Yamaha",
                speed: "145 km/h",
                
            });

            function updateBike(){
                SetMyBike(myOldBike=>{
                    return{...myOldBike,model:"MT-15"}
                });
            }
                
            

    return (
        <>
        <h1>My Bike</h1>
        <p>Color : {color}</p>
        <p>Model : {model}</p>
        <p>Company :{company}</p>
        <p>Top Speed : {speed}</p>

        <h1>My Bike</h1>
        <p>Color : {MyBike.color}</p>
        <p>Model : {MyBike.model}</p>
        <p>Company :{MyBike.company}</p>
        <p>Top Speed : {MyBike.speed}</p>

        <button onClick={updateBike}>Change bike</button>
        </>
    );

}
export default MultipleState;
