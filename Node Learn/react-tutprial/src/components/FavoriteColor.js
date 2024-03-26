import { useState } from "react";


function FavoriteColor(){

    const [color,setColor]=useState("red")

    return (
        <>
        <h1>My favoirter color is {color}</h1>
        <button onClick={() => {setColor("blue")}}>Change color</button>
        </>
    );

}
export default FavoriteColor;