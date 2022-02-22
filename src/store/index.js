import { createStore } from "redux";
import reducer from "./reducer";

const initialState = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

const store = createStore(reducer, initialState);

export default store;
