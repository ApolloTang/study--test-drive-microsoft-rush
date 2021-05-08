import React from 'react';
import ReactDom from 'react-dom';

import fonts from './common/fonts/index.js';
import './main.less';
import App from './app';

fonts.loadFonts()
const appContainer = document.getElementById('app-container');
ReactDom.render( <App/>,  appContainer)

