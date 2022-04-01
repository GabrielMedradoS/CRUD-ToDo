import { AiOutlineEdit } from "react-icons/ai";
import "./Buttons.css";

export function EditButton({ clickEditButton }) {
  return (
    <button>
      <AiOutlineEdit onClick={clickEditButton} size={20} color={"#64697b"} />
    </button>
  );
}
