import React from "react";

class color extends React.Component {

    constructor(){
        super();
        this.state={color:'green',model:"BMW"};
    }
    render() {
        return (
            <>
            <h1>My car is {this.state.model} and this color is {this.state.color}</h1>
            <button onClick={() =>{this.setState(car=>{return({...car,color:"white"});})}}>chnage color</button>
            </>
        );
    };
}
export default color;