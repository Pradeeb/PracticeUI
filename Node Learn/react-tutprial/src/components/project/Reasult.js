import React from "react";

export default function Reasult({secretNum,term}){
    
    let head="You Guesse is";
    let result;

    if(term){
        if (term > secretNum) {
            result=head+' Higher';
        }else if(term < secretNum){
            result=head+' Lower';
        }
        else if(term ==secretNum){
            result=head+' Yipee! correct';
        } else {
            result='Please enter valid value'
        }
    }

    return(
        <h2>
           {result}
        </h2>
    );

}