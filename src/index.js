import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

// ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
