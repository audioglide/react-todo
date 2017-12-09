import React, { Component } from 'react';
import { auth, provider } from '../../firebase';
//import TextField from 'material-ui/TextField';
import App from '../../components/main/App';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: 0,
    float: 'right'
};

const loginAttributes = {
    label: "Login with Google",
    secondary: true,
    style: buttonStyle
}

const logoutAttributes = {
    label: "Logout",
    secondary: true,
    style: buttonStyle
}

// const inputStyles = {
//     margin: 5
// };

class Login extends Component {
    constructor() {
        super()
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            user: ''
        }
    }
    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }
    render() {
        return (
            <div>
                <h3>Login</h3>
                {/* <TextField
                    hintText='Username'
                    floatingLabelText="Username"
                    type="text"
                    style={inputStyles}
                />
                <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                    style={inputStyles}
                /> */}
                <div className="login">

                    {this.state.user ?
                        <div>
                            <div className='user-profile'>
                                <div>{this.state.user.displayName}</div>
                                <img alt="profile" src={this.state.user.photoURL} />
                            </div>
                        </div>
                        :
                        <div className='wrapper'>
                            <p>You must be logged add and delete items from firebase.</p>
                        </div>
                    }
                    {this.state.user ?
                        <div>
                            <RaisedButton {...logoutAttributes} onClick={this.logout} />
                            <App />
                        </div>
                        :
                        <RaisedButton {...loginAttributes} onClick={this.login} />
                    }

                </div>
            </div>
        );
    }
}

export default Login;