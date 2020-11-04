import React, { Component } from "react";
import PropTypes from 'prop-types';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

class TodoList extends Component {
    state = {
        text: '',
        todoId: ''
    };

    onTextChange = (event) => {
        this.setState({text: event.target.value});
    };

    editItem = (todo) => {
        this.setState({todoId: todo.id, text: todo.text});
    };

    saveItem = () => {
        this.props.onUpdateItem(this.state.todoId, this.state.text);
        setTimeout(() => toastr.success("Todo successfully updated!"), 0);
        this.setState({todoId: '', text: ''});
    };

    removeItem = (id) => {
        this.props.onRemoveItem(id);
        setTimeout(() => toastr.success("Todo successfully removed!"), 0);
    };

    renderItem = (todo) => {
        if (this.state.todoId === todo.id) {
            return (
                <span>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <button
                        onClick={this.saveItem}>Edit
                    </button>
                </span>
            );
        }
        return (<span onDoubleClick={() => this.editItem(todo)}>{todo.text}</span>)
    };

    render() {
        const { list, onToggleItem } = this.props;

        return (
            <div className="todo-list">
                { list.map(todo => <div className="todo" key={todo.id}
                                         style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>
                        {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => onToggleItem(todo.id)}>Toggle</button>
                        <button onClick={() => this.removeItem(todo.id)}>Delete</button>
                    </div>)
                }
            </div>
        );
    }
}

TodoList.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
};

export default TodoList;