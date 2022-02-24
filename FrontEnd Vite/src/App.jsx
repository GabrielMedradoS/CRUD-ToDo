import "./App.css";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
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
                <AiOutlineDelete
                  onClick={() => deleteTodo(todo)}
                  size={20}
                  color={"#64697b"}
                />
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  async function handleWitthNewButton() {
    setInputVisibility(!inputVisibility);
  }

  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
  }

  async function createTodo() {
    const response = await axios.post("http://localhost:3333/todos", {
      name: inputValue,
    });
    getTodos();
    setInputVisibility(!inputVisibility);
  }

  async function deleteTodo(todo) {
    await axios.delete(`http://localhost:3333/todos/${todo.id}`);
    getTodos();
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
        <button
          onClick={inputVisibility ? createTodo : handleWitthNewButton}
          className="newTaskButton"
        >
          {inputVisibility ? "Confirm" : "+ New Task"}
        </button>
      </header>
    </div>
  );
}

export default App;
