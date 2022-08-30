import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import ReduxPromise from "redux-promise";
import App from "./components/App";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>
);
