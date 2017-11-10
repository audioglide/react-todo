import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/main/App';
import Login from './components/login/login';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render( 
    <MuiThemeProvider>
        <Login />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();