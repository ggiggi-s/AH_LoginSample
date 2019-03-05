import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './store/counter';
import PageStateStore from './store/pageStateStore';
import User from './store/user';

const counter = new CounterStore();
const pageNavigation = new PageStateStore();
const user = new User();
ReactDOM.render(
  <Provider counter={counter} pageNavigation={pageNavigation} user={user}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
