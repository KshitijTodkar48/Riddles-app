import React, { useState } from "react";

const Card = (props) => {
    
    const[val,setVal] = useState(false) ;

    const clickhandler = () =>{
        setVal(true) ;
    }

    return(
        <>
        <div className="card">
            <h2>{props.riddle}</h2>
            {
                val ? <h2>{props.answer}</h2> : <></>
            }
            <button className="button" onClick={clickhandler}>Show answer</button>
        </div>
        </>
    );
}
export default Card ;