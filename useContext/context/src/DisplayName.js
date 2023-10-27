import { useContext } from "react";
import { Appcontext } from "./App";


const DisplayName =()=>{


    const{name}=useContext(Appcontext);
    return(
        <>
        Name:{name}
        </>
    )
}
export default DisplayName;