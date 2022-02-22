import "./style.css";
import { useEffect, useState } from "react";
import store from "../../store";
import ListItem from "../listItem";

export default function List() {
  const [list, setList] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setList(store.getState());
      localStorage.setItem("list", JSON.stringify(store.getState()));
    });
  }, []);
  return (
    <div className="list">
      {list.map((item, index) => {
        return (
          <ListItem
            key={index}
            id={index}
            name={item.name}
            surname={item.surname}
            rates={item.rate}
          />
        );
      })}
    </div>
  );
}
