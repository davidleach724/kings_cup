import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App'

ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root')
);
