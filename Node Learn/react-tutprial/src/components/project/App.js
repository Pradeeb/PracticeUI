import { useState } from 'react';
import './App.css'
import Reasult from './Reasult';

export default function App(){
    const secretNum=Math.floor(Math.random()*10)+1;

    const[term,setTerm]=useState("");

    const handleChang=(e)=>{
     setTerm(e.target.value);
    }
    console.log(secretNum,term);


    return(
        <div className='container'>
            <div className='head'>
                <label><h3>Guess the number between 1 to 10</h3></label>
            </div>
            <input name="term" type='text'onChange={handleChang}/>
            <Reasult secretNum={secretNum} term={term}/>
        </div>
    );
}