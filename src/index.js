import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import '../node_modules/react-grid-layout/css/styles.css';
//import '../node_modules/react-resizable/css/styles.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();