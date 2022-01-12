import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';

import Nyamka from "./Nyamka";

import Header from "./components/Header";
import About from "./components/About";
import List from "./components/List";
import New from "./components/New";
import Login from "./components/Login";
import Signup from "./components/Signup";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Nyamka} />
          <Route exact path="/list" component={List} />
          <Route exact path="/new" component={New} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();