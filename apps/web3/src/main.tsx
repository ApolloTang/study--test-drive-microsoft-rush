import React from 'react';
import ReactDom from 'react-dom';

import './main.less';
import App from './app';

const appContainer = document.getElementById('app-container');
ReactDom.render( <App/>,  appContainer)

