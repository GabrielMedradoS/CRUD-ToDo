import "./App.css";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const Todos = ({ todos }) => {
  return (
    <div className="todosDiv">
      {todos.map((todo) => {
        return (
          <div className="todo">
            <button
              className="checkbox"
              style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
            ></button>
            <p>{todo.name}</p>
            <button>
              <AiOutlineEdit size={20} color={"#64697b"} />
            </button>
            <button>
              <AiOutlineDelete size={20} color={"#64697b"} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
  }

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Dont be lazy</h1>
        </div>
        <Todos todos={todos}></Todos>
        <input
          style={{ display: inputVisibility ? "block" : "none" }}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          type="text"
          className="inputName"
        />
        <button className="newTaskButton">+ New Task</button>
      </header>
    </div>
  );
}

export default App;
