import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import listReducer from "./components/reducers/listReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

// Base file loaded with index.html

const store = createStore(listReducer);

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById("root"));