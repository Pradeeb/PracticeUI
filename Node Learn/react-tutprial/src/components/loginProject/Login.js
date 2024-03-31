import { useState } from "react";

export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
      
    function singinHandler(){
         if(email == 'valan@gmail.com' && password =='India123!'){
            setMessage('Sucessfully login')
         }else{
            setMessage('Invalid credentials')
         }
    }

    return(
        <div>
            <h1>Login</h1>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/> <br/><br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/><br/><br/>
            <button onClick={singinHandler}>Submit</button><br/><br/>
            {message && <p>{message}</p>}
        </div>
    );
}