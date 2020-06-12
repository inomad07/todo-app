import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    background-color: whitesmoke;
    margin-bottom: 5px;
    padding: 15px;
`;

const TodoList = (props) => {
    const [ text, setText ] = useState("");
    const [ todoId, setId ] = useState("");
    const { list, onRemoveItem, onToggleItem, onUpdateItem, onLoadTodos } = props;

    useEffect(() => {
        onLoadTodos()
    }, []);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const editItem = (todo) => {
        setId(todo._id);
        setText(todo.text);
    };

    const saveItem = () => {
        onUpdateItem(todoId, text);
        setId('');
        setText('');
    };

    const renderItem = (todo) => {
        if (todoId === todo._id) {
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
        <List>
            { list.map(todo => <Item key={todo._id}
                                    style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => onToggleItem(todo._id)}>Toggle</button>
                <button onClick={() => onRemoveItem(todo._id)}>Delete</button>
            </Item>)}
        </List>
    );
};

TodoList.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
    onLoadTodos:  PropTypes.func,
};

export default TodoList;