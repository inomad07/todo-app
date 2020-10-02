import React, { useState } from "react";
import PropTypes from 'prop-types';

const TodoList = (props) => {
    const [ text, setText ] = useState("");
    const [ todoId, setId ] = useState("");
    const { list, onRemoveItem, onToggleItem, onUpdateItem } = props;

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const editItem = (todo) => {
        setId(todo.id);
        setText(todo.text);
    };

    const saveItem = () => {
        onUpdateItem(todoId, text);
        setId('');
        setText('');
    };

    const renderItem = (todo) => {
        if (todoId === todo.id) {
            return (
                <span>
                    <input
                        type     = "text"
                        value    = { text }
                        onChange = { onTextChange }
                    />
                    <button onClick={saveItem}>Edit</button>
                </span>
            );
        }

        return (<span onDoubleClick={() => editItem(todo)}>{todo.text}</span>)
    };

    return (
        <div className="todo-list">
            { list.map(todo => <div className="todo" key={todo.id}
                                    style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>
                {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => onToggleItem(todo.id)}>Toggle</button>
                <button onClick={() => onRemoveItem(todo.id)}>Delete</button>
            </div>)
            }
        </div>
    );
};


TodoList.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
};

export default TodoList;