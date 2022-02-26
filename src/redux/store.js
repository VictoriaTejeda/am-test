import { createStore } from "redux";
import reducer from "./reduces";

const store = createStore(reducer);

export default store;