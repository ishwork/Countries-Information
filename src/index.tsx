import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import storeHouse from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeHouse()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
