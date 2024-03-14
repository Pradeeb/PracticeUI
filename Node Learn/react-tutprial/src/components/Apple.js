import React from 'react';

class Apple extends React.Component{
  render(){
    const {appleInfo}=this.props;
    return(<h1>I am a {appleInfo.color} apple & my name is {appleInfo.brand}</h1>);
  }
}

export default Apple;
