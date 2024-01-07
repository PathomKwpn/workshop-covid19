import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
// ...

// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { store } from "./redux/store/store.tsx";
// import myFirstReducer from "./redux/reducer/reducer.ts";

// const sagaMiddleware = createSagaMiddleware();
// const rootReducer = combineReducers({ myFirstReducer });
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(mySaga);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
