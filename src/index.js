import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/main/App';
import Login from './components/login/login';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    // NOTE no more browserHistory https://reacttraining.com/react-router/web/api/BrowserRouter
    BrowserRouter,
    Route,
    NavLink,
    Switch
    // NOTE Hello react-router-dom!
} from 'react-router-dom'

const About = () => (
    <div>
        <h3>Hello from about</h3>
    </div>
)

const Contact = () => (
    <div>
        <h3>Hello from contact</h3>
    </div>
)
const notFoundStyles = {
    display:'inline-block',
    fontWeight:600,
    marginTop: 20+'px'
}
const NotFoundPage = () => (
    <div>
        <span style = {notFoundStyles}> 404 - </span><NavLink to="/"> Go home</NavLink>
    </div>
)

const Header = () => (
    <header>
        <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
        <NavLink activeClassName="is-active" to="/about">About</NavLink>
        <NavLink activeClassName="is-active" to="/contact">Contact</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component = {NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render( 
    <MuiThemeProvider>
        {routes}
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();