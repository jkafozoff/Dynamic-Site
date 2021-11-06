import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import introReducer from "./store/reducers/intro";
import postsReducer from "./store/reducers/posts";

const rootReducer = combineReducers({
  intro: introReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
