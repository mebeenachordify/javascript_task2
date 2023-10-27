import { useContext } from "react";
import { Appcontext } from "./App";

const GetName = () => {
    
    const{setName}=useContext(Appcontext);
    return (
        <>
            <input
                type="text" placeholder="Enter name here.."
                onChange={(e) => setName(e.target.value)} 
            />
        </>
    );
};

export default GetName;
