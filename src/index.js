import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";

import "antd/dist/antd.css";
import '@/assets/scss/common/root.scss'

//业务组件
import asyncComponent from "./router/asyncComponent";
const Home = asyncComponent(() => import("./components/home.js"));
const Login = asyncComponent(() => import('./components/login.js'))

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" replace component={Home} />
      <Route path="/login" component={Login} />
      {/* <Route component={Error404} /> */}
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
