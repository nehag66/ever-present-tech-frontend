import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import { combineReducers, createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducer";

// import rootReducer from "./reducers";
// const reducers = combineReducers({
//   addUser: addUserReducer,
// });

// const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch({ type: "CHANGE_USERNAME", payload: "client1" });
// store.dispatch({ type: "CHANGE_PASSWORD", payload: "client1password" });

// const store = createStore(rootReducer);
// const store = createStore(reducer);

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
