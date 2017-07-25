import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    };

    editItem = (todo) => {
        this.setState({editableToDoId: todo.id, text: todo.text});
    };

    saveItem = () => {
        this.props.save(this.state.editableToDoId, this.state.text);
        this.setState({editableToDoId: '', text: ''});
    };

    switchMode = () => {
        alert("hello ");
    };

    renderItem = (todo) => {
        let isCurrentToDoEditable = this.state.editableToDoId === todo.id;
        if (isCurrentToDoEditable)
            return (
                <span>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <button
                        onClick={this.saveItem}>Save
                    </button>
                </span>
            );

        return (<span onDoubleClick={() => this.editItem(todo)}>{todo.text}</span>)
    };

    render() {
        let todos = this.props.todos;
        const { onRemoveItem } = this.props;
        const { onSelectItem } = this.props;
        console.log(todos);

        return (
            <div className="todo-list">
                { todos.map(todo => <div className="todo" key={todo.id}
                                         style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>

                    {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;

                    <button onClick={() => onSelectItem(todo.id)}>Select</button>
                    <button onClick={() => onRemoveItem(todo.id)}>Delete</button>

                </div>)}

            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(List);