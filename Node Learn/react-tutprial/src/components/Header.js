import './Header.css';
import style from './Header.module.css';

function header(){

    const headerStyle={
        backgroundColor:"red",
        textAlign:"center",
        top:"0",
        color:"white",
         padding:" 10px"
    };
    return(
        <>
          <h1 style={headerStyle}>Learn Heading</h1>
          <p className={style.inform}>here learn how to add inline css</p>
        </>
    );
}
export default header;