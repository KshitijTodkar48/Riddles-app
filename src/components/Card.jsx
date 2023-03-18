import React, { useContext } from "react";
import { BtnContext } from "../context/NextBtn";

const Card = (props) => {
    
    const btnState = useContext(BtnContext) ;

    const clickhandler = () =>{
        btnState.setVal(true) ;
    }

    return(
        <>
        <div className="card">
            <h2>{props.riddle}</h2>
            {
                btnState.val ? <h2>{props.answer}</h2> : <></>
            }
            <button className="button" onClick={clickhandler}>Show answer</button>
        </div>
        </>
    );
}
export default Card ;