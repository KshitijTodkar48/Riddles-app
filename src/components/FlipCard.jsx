import React from "react";
import { getRiddles } from "./Riddles";
import { useBtn } from "../context/NextBtn";

const FlipCard = (props) => {

    const btnState = useBtn() ;

    const nextRiddle=()=>{
        getRiddles().then((riddles)=>{
          console.log(riddles);
          btnState.setData(riddles) ;
          btnState.setVal(false);}) ;
          myFunc() ;
      }

    function myFunc() {
        btnState.setVal(true) ;

        let para = document.querySelector(".card-inner");

        if(para.classList.contains("is-flipped")) {
            para.classList.remove("is-flipped");
        }
        else {
            para.classList.add("is-flipped");
        }
    }

    return(
        <div className="flipcard">
            <div className="card-inner">
                <div className="card-face frontface">
                <p>{props.riddle}</p>
                <button className="button" onClick={myFunc}>Show answer</button>
                </div>
                <div className="card-face backface">
                {
                    btnState.val ? <p>{props.answer}</p> : <></>
                }
                <button className="button-next" onClick={nextRiddle}>Next riddle</button>
                </div>
            </div>
        </div>
    )
}

export default FlipCard ;