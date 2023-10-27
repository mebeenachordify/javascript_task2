
import './App.css';
import GetName from './GetName';
import DisplayName from './DisplayName';
import React, { useState,createContext } from 'react';

 export const Appcontext =createContext(null);

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <div><h3>React UseContext Hooks</h3></div>
      <Appcontext.Provider value={{name,setName}}>
    
      <GetName/>
      <br/><br/>
      <DisplayName />

      </Appcontext.Provider>
    </div>
  );
}

export default App;

