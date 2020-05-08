import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { todoListProps as Props, todoType } from '../../types'

const List = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    background-color: whitesmoke;
    margin-bottom: 5px;
    padding: 15px;
`;

const TodoList = (props: Props) => {
    const [ text, setText ] = useState('');
    const [ todoId, setId ] = useState('');
    const { list, onRemoveItem, onToggleItem, onUpdateItem, onLoadTodos } = props;

    useEffect(() => {
        onLoadTodos()
    }, []);

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const editItem = (todo: todoType) => {
        setId(todo._id);
        setText(todo.text);
    };

    const saveItem = () => {
        const todo = {
            id : todoId,
            text
        };
        onUpdateItem(todo);
        setId('');
        setText('');
    };

    const renderItem = (todo: todoType) => {
        if (todoId === todo._id) {
            return (
                <span>
                    <input
                        type='text'
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
            { list.map( (todo: todoType) => <Item key={todo._id}
                                    style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => onToggleItem(todo)}>Toggle</button>
                <button onClick={() => onRemoveItem(todo)}>Delete</button>
            </Item>)}
        </List>
    );
};


export default TodoList;