
require('./bootstrap');



import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './app-routes';


import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
    <BrowserRouter>
        {AppRoutes}
    </BrowserRouter>
), document.getElementById('root'))