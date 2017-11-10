import React, { Component } from 'react';
import firebase, { auth, provider } from '../../firebase';
import AddItem from '../additem/additem';
import ShowList from '../showlist/showlist';
import RaisedButton from 'material-ui/RaisedButton';


const buttonStyle = {
    margin: 12,
};

const loginAttributes = {
    label: "Login",
    secondary: true,
    style: buttonStyle
}

const logoutAttributes = {
    label: "Logout",
    secondary: true,
    style: buttonStyle
}

class TodoList extends Component {
    constructor() {
        super()
        this.addItem = this.addItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            user: '',
            value: '',
            warning: '',
            items: [],
        }
    }

    addItem() {

        var itemsArray = this.state.items;

        if (this.state.value.length > 0) {
            itemsArray.push({
                key: Date.now(),
                value: this.state.value

            });
            const itemsRef = firebase.database().ref('todos');
            const items = {
                key: Date.now(),
                value: this.state.value
            }

            itemsRef.push(items);
            this.setState({
                items: itemsArray
            });
            console.log(this.state.items);

        } else {
            this.setState({
                warning: 'Please enter item name'
            })
        }
    }

    handleInputChange(event) {

        this.setState({ value: event.target.value })

    }

    delete(item) {
        this.setState(prevState => ({
            items: prevState.items.filter(el => el !== item)
        }));
        console.log('my item' + item.key);
        const itemRef = firebase.database().ref(`/todos/${item.key}`);
        itemRef.remove();

    }
    edit(item) {
        console.log(item.key);
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
        const itemsRef = firebase.database().ref('todos');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    key: item,
                    value: items[item].value
                });
            }
            this.setState({
                items: newState
            });
        });

        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }


    render() {
        return (
            <div>
                {/* <div className="login">
                    {this.state.user ?
                        <RaisedButton {...logoutAttributes} onClick={this.logout} />
                        :
                        <RaisedButton {...loginAttributes} onClick={this.login} />
                    }
                    {this.state.user ?
                        <div>
                            <div className='user-profile'>
                                <img src={this.state.user.photoURL} />
                            </div>
                        </div>
                        :
                        <div className='wrapper'>
                            <p>You must be logged add and delete items from firebase.</p>
                        </div>
                    }
                </div> */}
                <div className="todo-list">
                    <AddItem
                        addItem={this.addItem}
                        handleInputChange={this.handleInputChange}
                    />
                    <span className='todo-warning'>{this.state.warning}</span>
                    <ShowList
                        data={this.state}
                        _handleDelete={this.delete.bind(this)}
                        _handleEdit={this.edit.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;