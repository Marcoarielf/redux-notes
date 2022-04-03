import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { noteReducer } from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    notes: noteReducer,
    filters: filterReducer,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
