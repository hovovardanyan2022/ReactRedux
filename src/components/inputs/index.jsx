import { useRef } from "react";
import store from "../../store";

export default function Inputs() {
  const nameInput = useRef(null);
  const surnameInput = useRef(null);
  return (
    <form>
      <input ref={nameInput} type="text" placeholder="Input your name" />
      <input ref={surnameInput} type="text" placeholder="Input your surname" />
      <button
        onClick={(e) => {
          e.preventDefault();
          store.dispatch({
            type: "addUser",
            payload: {
              name: nameInput.current.value,
              surname: surnameInput.current.value
            }
          });
          nameInput.current.value = "";
          surnameInput.current.value = "";
        }}
      >
        Add user
      </button>
    </form>
  );
}
