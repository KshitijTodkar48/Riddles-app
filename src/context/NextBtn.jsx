import { createContext , useState , useContext } from "react";

export const BtnContext = createContext(null) ;

export const useBtn = () => {
    const btnState = useContext(BtnContext) ;
    return btnState ;
}

export const BtnProvider = (props) => {

    const [val,setVal] = useState(false) ;
    const [data,setData] = useState(null) ;

    return(
        <BtnContext.Provider value={{val,setVal,data,setData}}>
           {props.children}
        </BtnContext.Provider>
    )
}