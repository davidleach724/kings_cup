import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/App/App'

ReactDOM.render(<HashRouter> <App /> </HashRouter>, document.getElementById('root')
);

