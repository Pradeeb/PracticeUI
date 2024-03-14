import Car from './Car';
import Apple from './Apple';

function Garage(){

    const brand=`ford`;
    const text=`ford`;
    const color=`red`;

    const carInfo={brand:`ford`,color:`red`};
    const appleInfo={brand:`perika`,color:`green`};

    const carList=[
        {brand:`ford`,color:`red`},
        {brand:`BMW`,color:`White`},
        {brand:`Audi`,color:`Black`},
        {brand:`supra`,color:`silver`},
        {brand:`benze`,color:`white`},
    ];

    const nameLst=[
        'valan','pradeeb','karthi','nazeem'
    ]

    return(
      <>
      <h1>How many {text} cars here?</h1>
      <Car carInfo={carInfo}/>
      <Apple appleInfo={appleInfo}/>
      <ul>
        {carList.map((carInfo)=><li key={carInfo.brand}> <Car carInfo={carInfo}/> </li>)}
      </ul>
      <ul>
        {nameLst.map((Name,index) => <p key={index}>{Name}</p>)}
      </ul>
      </>
    );
  }

  export default Garage;