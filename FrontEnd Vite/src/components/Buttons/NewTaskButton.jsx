import "./Buttons.css";

export function NewTaskButton({ taskClickButton, ...props }) {
  return (
    <button
      onClick={taskClickButton}
      className="newTaskButton"
      {...props}
    ></button>
  );
}
