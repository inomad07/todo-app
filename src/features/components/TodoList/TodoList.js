import React, { useState } from "react";
import './todo-list.css';

const TodoList = (props) => {
    const [ text, setText ] = useState("");
    const [ editableToDoId, setTodoId ] = useState("");
    const { list, onRemoveItem, onToggleItem, onUpdateItem } = props;

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const editItem = (todo) => {
        setTodoId(todo._id);
        setText(todo.text);
    };

    const saveItem = () => {
        onUpdateItem(editableToDoId, text);
        setTodoId('');
        setText('');
    };

    const renderItem = (todo) => {
        let isToDoEditable = editableToDoId;
        if (isToDoEditable  === todo._id) {
            return (
                <span>
                    <input
                        type="text"
                        value={text}
                        onChange={onTextChange}/>
                    <button onClick={saveItem}>Edit</button>
                </span>
            );
        }
        return (<span onDoubleClick={() => editItem(todo)}>{todo.text}</span>)
    };

    return (
        <div className="todo-list">
            { list.map(todo => <div className="todo" key={todo._id}
                                    style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => onToggleItem(todo._id)}>Toggle</button>
                <button onClick={() => onRemoveItem(todo._id)}>Delete</button>
            </div>)}
        </div>
    );
};


export default TodoList;