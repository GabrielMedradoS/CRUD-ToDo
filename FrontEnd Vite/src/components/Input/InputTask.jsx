import React, { useState } from "react";
import "./Input.css";

export function InputTask({ ...props }) {
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setInputValue(inputTask);
  }

  return (
    <input
      type="text"
      onChange={handleChangeInput}
      value={inputValue}
      className="inputName"
      {...props}
    />
  );
}
