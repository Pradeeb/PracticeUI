import { useState } from "react";

function List(){
    const[list,setlist]=useState([]);
    const[count,setcount]=useState(1);

    function additem(){
        const name= "item"+count;
        setlist((previousstate)=>{return[...previousstate,name]});
        setcount((previousstate)=>{return(previousstate+1);});
    }

   return(
    <>
     <h1> List Function</h1>
     <button onClick={additem}>Add Item</button>
     <ul>
         {
            list.map((item,index)=><li key={index}>{item}</li>)
         }
     </ul>
    </>
   ); 
}
export default List;