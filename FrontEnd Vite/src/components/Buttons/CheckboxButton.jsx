import "./Buttons.css";

export function CheckboxButton({ clickStatusButton, ...props }) {
  return (
    <button
      onClick={clickStatusButton}
      {...props}
      className="checkbox"
    ></button>
  );
}
