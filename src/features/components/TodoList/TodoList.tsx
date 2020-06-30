import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { todoListProps as Props, todoType } from '../../types';

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
    const [ text, setText ] = useState("");
    const [ todoId, setId ] = useState("");
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
        setTimeout(() => toastr.success("Todo successfully updated!"), 0);
        setId('');
        setText('');
    };

    const removeItem = (id: string) => (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onRemoveItem(id);
        setTimeout(() => toastr.success("Todo successfully removed!"), 0);
    };

    const renderItem = (todo: todoType) => {
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
            { list.map( (todo: todoType) => <Item key={todo._id}
                                    style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => onToggleItem(todo._id)}>Toggle</button>
                <button onClick={removeItem(todo._id)}>Delete</button>
            </Item>)}
        </List>
    );
};


export default TodoList;