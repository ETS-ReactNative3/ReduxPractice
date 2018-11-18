import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import resultReducer from "./store/reducers/result";
import countReducer from "./store/reducers/counter";

const combinedReducers = combineReducers({
  ctr: countReducer,
  res: resultReducer
});
const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
