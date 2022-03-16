import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </ BrowserRouter>, 
document.getElementById('root'));
