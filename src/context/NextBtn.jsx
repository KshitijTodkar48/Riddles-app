import { createContext , useState } from "react";

export const BtnContext = createContext(null) ;

export const BtnProvider = (props) => {

    const[val,setVal] = useState(false) ;

    return(
        <BtnContext.Provider value={{val,setVal}}>
           {props.children}
        </BtnContext.Provider>
    )
}