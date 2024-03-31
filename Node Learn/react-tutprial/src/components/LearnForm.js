import { useState } from "react";

function LearnForm() {

    const[input,setInput]=useState({phone:"+91"});

    function handleSubmit(e){
          e.preventDefault();
          console.log(input);
    }

   function onChangeHandle(e){
    const name=e.target.name;
    const value=e.target.value;
    setInput((previousState)=>{return{...previousState,[name]:value}});

   }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name :  <input  name="name" onChange={onChangeHandle}/></label><br/><br/>
                <label>Enter Your Email :  <input name="email" onChange={onChangeHandle} /></label><br/><br/>
                <label>Enter Your age :  <input name="age" onChange={onChangeHandle} /></label><br/><br/>
                <label>Enter Your age :  <input name="phone" onChange={onChangeHandle} value={input.phone}/></label><br/><br/>
                <input type="submit" value="submit" />
            </form>
        </>
    );
}
export default LearnForm;