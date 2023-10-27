import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoaction, RemoveTodoAction } from './actions/TodoActions';

function App() {

const[todo,setTodo]=useState();

const dispatch=useDispatch()
const Todo =useSelector((state)=>state.Todo)
const{todos}=Todo;

const handleSubmit = (e) =>{
  e.preventDefault();
  dispatch(AddTodoaction(todo));
};

const removeHandler= (t) =>{
  console.log(t);
  dispatch(RemoveTodoAction(t));
};



  return (
    <div className="App">
      <header className="App-header">
       <h2>TODO LIST APP USING REDUX</h2>
       <form onSubmit={handleSubmit}>
       
        <input placeholder="Enter a todo"
        style={{
          width:350,
          padding:10,
          borderRadius:20,
          border:"none",
          fontSize:20,
        }}
        
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type="submit"
        style={{

          padding:12,
          borderRadius:20,
          fontSize:20,
          marginLeft:20,
        }}

        >Go</button>
       </form>
       <ul className="allTodos">
{
  todos && todos.map((t)=>(
<li key={t.id} className="singleTodo">
          <span className="todoText">{t.todo}</span>
          <button
          style={{

            padding:10,
            borderRadius:25,
            border:"1px solid white",
            color:"white",
            backgroundColor:"red"
          }}

          onClick={()=>removeHandler(t)}

          >
            Delete
          </button>
        </li>

  ))
}

        
       </ul>
      </header>
    </div>
  );
}

export default App;
