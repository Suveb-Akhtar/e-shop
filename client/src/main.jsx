import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "./redux/Store.js";
import { app } from "./firebase.config.js"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider  store={store} app={app}>
  <PersistGate loading={"loading"} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
);
