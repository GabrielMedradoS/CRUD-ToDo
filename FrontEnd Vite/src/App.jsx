import "./Global.css";

import { useEffect, useState } from "react";
import axios from "axios";

//Buttons
import { DeleteButton } from "./components/Buttons/DeleteButton";
import { EditButton } from "./components/Buttons/EditButton";
import { NewTaskButton } from "./components/Buttons/NewTaskButton";
import { CheckboxButton } from "./components/Buttons/CheckboxButton";

//Input
/* import { InputTask } from "./components/input/InputTask"; */

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  //Visibilidade do input
  async function handleWitthNewButton() {
    setInputVisibility(!inputVisibility);
  }

  //Selecionar o ToDo para editar
  async function handleWithEditButtonClick(todo) {
    setSelectedTodo(todo);
    setInputVisibility(true);
  }

  //CRUD - funcionalidades

  // PEGAR OS TO DO COM O BD
  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    setTodos(response.data);
  }

  //CRIAR TO DO
  async function createTodo() {
    await axios.post("http://localhost:3333/todos", {
      name: inputValue,
    });
    getTodos();
    setInputVisibility(!inputVisibility);
    setInputValue("");
  }

  //EDITAR TO DO
  async function editTodo() {
    await axios.put("http://localhost:3333/todos", {
      id: selectedTodo.id,
      name: inputValue,
    });
    setSelectedTodo();
    setInputVisibility(false);
    getTodos();
    setInputValue("");
  }

  //MARCAR COMO CHECK
  async function modifyStatusTodo(todo) {
    await axios.put("http://localhost:3333/todos", {
      id: todo.id,
      status: !todo.status,
    });
    getTodos();
  }

  //DELETAR TO DO
  async function deleteTodo(todo) {
    await axios.delete(`http://localhost:3333/todos/${todo.id}`);
    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Dont be lazy</h1>
      </header>

      <main>
        {/* SEÇAO TO DOS OU LISTA DE TAREFAS */}
        <div className="todosDiv">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="todo">
                <CheckboxButton
                  clickStatusButton={() => modifyStatusTodo(todo)}
                  style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
                ></CheckboxButton>
                <p>{todo.name}</p>
                <EditButton
                  clickEditButton={() => handleWithEditButtonClick(todo)}
                />
                <DeleteButton clickDeleteButton={() => deleteTodo(todo)} />
              </div>
            );
          })}
        </div>

        {/* FORMULARIO PARA ADICIONAR OU EDITAR TAREFAS */}
        <div className="form">
          <input
            style={{ display: inputVisibility ? "block" : "none" }}
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            type="text"
            className="inputName"
          />

          <NewTaskButton
            taskClickButton={
              /* 2 Operadores ternarios*/
              inputVisibility
                ? selectedTodo
                  ? editTodo
                  : createTodo
                : handleWitthNewButton
            }
          >
            {inputVisibility ? "Confirm" : "+ New Task"}
          </NewTaskButton>
        </div>
      </main>
    </div>
  );
}

export default App;
