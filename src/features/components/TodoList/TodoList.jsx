import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { List, Item } from './style';
import { EDIT, DELETE, TOGGLE, TODO_SUCCESSFULLY_UPDATED, TODO_SUCCESSFULLY_REMOVED } from "../../../common/constants";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const TodoList = (props) => {
    const [ text, setText ] = useState("");
    const [ todoId, setId ] = useState("");
    const { list, onRemoveItem, onToggleItem, onUpdateItem, onLoadTodos } = props;

    useEffect(() => {
        onLoadTodos();
    }, []);

    const onTextChange = (event) => {
        setText(event.target.value);
    };

    const editItem = (todo) => (e) => {
        e.preventDefault();
        setId(todo._id);
        setText(todo.text);
    };

    const saveItem = () => {
        onUpdateItem({id: todoId, text});
        setTimeout(() => toastr.success(TODO_SUCCESSFULLY_UPDATED), 0);
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
                    <button onClick={saveItem}>{EDIT}</button>
                </span>
            );
        }

        return (<span onDoubleClick={editItem(todo)}>{todo.text}</span>)
    };

    const toggleItem = (id) => (e) => {
        e.preventDefault();
        onToggleItem(id);
    }

    const removeItem = (id) => (e) => {
        e.preventDefault();
        onRemoveItem(id);
        setTimeout(() => toastr.success(TODO_SUCCESSFULLY_REMOVED), 0);
    };

    return (
        <List>
            { list.map(todo => <Item key={todo._id}
                                    style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={toggleItem(todo._id)}>{TOGGLE}</button>
                <button onClick={removeItem(todo._id)}>{DELETE}</button>
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
