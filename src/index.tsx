import * as $ from 'jquery'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
window.JQuery = $;
window.$ = $;
window.ReactDOM = ReactDOM;
window.React = React;
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
