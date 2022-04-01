import { AiOutlineDelete } from "react-icons/ai";
import "./Buttons.css";

export function DeleteButton({ clickDeleteButton }) {
  return (
    <button>
      <AiOutlineDelete
        onClick={clickDeleteButton}
        size={20}
        color={"#64697b"}
      />
    </button>
  );
}
