import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routers from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history = {browserHistory} routers= {routers} />,
  document.getElementById('app')
);


