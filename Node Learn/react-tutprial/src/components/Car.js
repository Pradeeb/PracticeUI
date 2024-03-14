function Car(props){
    // const {brand,color}=props;
    const {carInfo}=props;
    const text = `Four ${carInfo.brand} ${carInfo.color} Car`;
    return(
    <h1>{text}</h1>
    );
  }

  export default Car;