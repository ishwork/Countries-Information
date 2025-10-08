import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import storeHouse from "./redux/store/store";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={storeHouse()}>
      <App />
    </Provider>
  </React.StrictMode>
);
