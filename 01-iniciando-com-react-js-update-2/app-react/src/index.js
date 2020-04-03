import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';
import Props from './Props';

ReactDOM.render(<Props attr="span" attr2="VALUE2" attr3="VALUE3" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
