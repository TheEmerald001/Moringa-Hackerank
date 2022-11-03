import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./redux/store";
import App from "./components/App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "./CSS/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
