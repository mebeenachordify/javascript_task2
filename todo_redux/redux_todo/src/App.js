import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoaction, RemoveTodoAction } from './actions/TodoActions';

function App() {
  const [mytodo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { tod } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoaction(mytodo));
  };

  const removeHandler = (m) => {
    dispatch(RemoveTodoAction(m));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h3>TODO LIST APP USING REDUX</h3>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter text"
              style={{
                width: 350,
                padding: 10,
                borderRadius: 20,
                border: "none",
                fontSize: 20,
              }}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              style={{
                padding: 12,
                borderRadius: 20,
                fontSize: 20,
                marginLeft: 20,
                backgroundColor: "orange",
              }}
            >
              Go
            </button>
          </form>
          <ul className="allTodos">
            {tod &&
              tod.map((m) => (
                <li key={m.id} className="singleTodo">
                  <span className="todoText">{m.mytodo}</span>
                  <button
                    style={{
                      padding: 10,
                      borderRadius: 25,
                      border: "1px solid white",
                      color: "white",
                      backgroundColor: "green",
                    }}
                    onClick={() => removeHandler(m)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
