import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import BurgerBuilderReducer from "./store/reducers/burgerBuilder";

const store = createStore(
  BurgerBuilderReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
