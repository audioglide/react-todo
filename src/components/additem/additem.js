import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: 12,
};

const buttonAttributes = {
    label: "Add",
    primary: true,
    style: buttonStyle
}

class AddItem extends Component {
    render() {
        return (
            <div>
                <h2>Add item</h2>
                <TextField
                    hintText={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                    value={this.props.inputValue}
                />
                <RaisedButton {...buttonAttributes} onClick={this.props.addItem} />
            </div>
        );
    }
}

export default AddItem;