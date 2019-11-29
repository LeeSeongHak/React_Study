import React, { Component } from 'react';

class Control extends Component {
    render() {
        console.log('Subject render');
        return (
            <ul>
                <li><a href="/create" onClick={function(create, e){
                    e.preventDefault();
                    this.props.onChangeMode(create);
                }.bind(this, 'create')}>create</a></li>
                <li><a href="/update" onClick={function(update, e){
                    e.preventDefault();
                    this.props.onChangeMode(update);
                }.bind(this, 'update')}>update</a></li>
                <li><input type="button" value="delete" onClick={function(del, e){
                    e.preventDefault();
                    this.props.onChangeMode(del);
                }.bind(this, 'delete')}></input></li>
            </ul>
        );
    }
}

export default Control;