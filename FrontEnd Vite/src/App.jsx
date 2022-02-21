import "./App.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const arrayTodos = [
  { name: "Limpar a casa", status: true },
  { name: "Limpar o cachorro", status: false },
];

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
  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Dont be lazy</h1>
        </div>
        <div className="todosDiv">
          <Todos todos={arrayTodos}></Todos>
        </div>
      </header>
    </div>
  );
}

export default App;
