import React,{useEffect, useState} from "react"
import './Hook.css';

// function Hook() {
//  const[count,setCount]=useState(4);

//  const decrement=()=>{
//     setCount(count=>count-1);//this 2 count decreses value by 2
//     setCount(count=>count-1);
//  }
//  const increment=()=>{
//     setCount(count+1);//this count increses value by 1
//  }
//     return(
//         <div>
//         <button  className="decrement-button"onClick={decrement}></button>
//         <span>{count}</span>
//         <button  className="increment-button"onClick={increment}></button>
//         </div>
//     )  
// }
function Hook(){
    const[user,setUser]=useState('post');

    useEffect(() => {
      console.log('printed');
      });
    

    return(
        <div>
            <button onClick={()=>setUser('user')}>User</button>
            <button onClick={()=>setUser('system')}>grl</button>
            <button onClick={()=>setUser('women')}>men</button>
            <h3>{user}</h3>

        </div>
    )
}
export default Hook;