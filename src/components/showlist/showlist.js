import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';

class ShowList extends Component {
    _handleDelete(item){
        this.props._handleDelete(item);
    }

    _handleEdit(item){
        this.props._handleEdit(item);
    }
    
    render() {
        const listItemStyles = {
            border: '1px solid #ccc',
            margin: '5px'
        }
        return (
            <List>
                {this.props.data.items.map((item) => {
                    return(
                    <ListItem
                        style={listItemStyles}
                        key={item.key} 
                        primaryText={item.value}
                        onClick={this._handleEdit.bind(this, item)}
                        rightIcon={<ActionDelete onClick={this._handleDelete.bind(this, item)}/>}
                        
                    />
                    )
                })}
            </List>
        );
    }
}

export default ShowList;