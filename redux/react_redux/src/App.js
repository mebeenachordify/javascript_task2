// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { increment ,decrement} from "./actions";

function App() {

  const counter= useSelector(state=>state.counter);
  const isLogged= useSelector(state=>state.isLogged);
  const dispatch =useDispatch();

  return (
    <div className="App">
     <h1>Counter{counter}</h1>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
     {isLogged? <h3>Valuable information i should not see</h3>: ''}
     
    </div>
  );
}

export default App;