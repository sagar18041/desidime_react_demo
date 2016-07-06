import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Coupons from "./pages/Coupons";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
// <Route path="topics" name="topics" component={Topics}></Route>
// <Route path="merchants" name="merchants" component={Merchants}></Route>
// <Route path="channels" name="channels" component={Channels}></Route>
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="deals(/:deal)" name="deals" component={Deals}></Route>
      <Route path="coupons" name="coupons" component={Coupons}></Route>
      
    </Route>
  </Router>,
  app);