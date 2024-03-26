import { useEffect, useState } from "react";

function LearnUseEfect() {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('Screen Rendered');
        // checkCount();
        // setCount(1)
        setTimeout(()=>{
            setCount((previousState)=>{
                return previousState+1;
            });
        },1000);
    },[count]);

    function updateCount(){

        setCount((previousState)=>{return previousState+1});

    }

    function checkCount(){
        if(count >= 11){
            setCount(1);
        }
    }

    return (
    <>
        <h1>i have reander {count} times</h1>
        <button onClick={updateCount}>increase count</button>
    </>
    );
}
export default LearnUseEfect;