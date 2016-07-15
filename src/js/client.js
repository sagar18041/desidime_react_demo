import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import Coupons from "./pages/Coupons";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
// <Route path="topics" name="topics" component={Topics}></Route>
// <Route path="merchants" name="merchants" component={Merchants}></Route>
// <Route path="channels" name="channels" component={Channels}></Route>

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import api from '../../middleware/api'
import desidimeApp from '../../reducers/reducer'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(desidimeApp)

console.log(store);

const app = document.getElementById('app');

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  app
)