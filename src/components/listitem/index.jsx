import { useRef } from "react";
import store from "../../store";
import "./style.css";

export default function ListItem({ name, surname, id, rates }) {
  const rateInput = useRef(null);
  return (
    <li className="list-item">
      <span>{name}</span>
      <span>{surname}</span>
      <span>
        Rates: "
        {rates.map((item) => {
          return item + ", ";
        })}
        "
      </span>
      <input ref={rateInput} type="number" />
      <button
        onClick={(e) => {
          e.preventDefault();
          store.dispatch({
            type: "rateUser",
            payload: {
              id: id,
              rate: rateInput.current.value
            }
          });
          rateInput.current.value = "";
        }}
      >
        Rate
      </button>
    </li>
  );
}
