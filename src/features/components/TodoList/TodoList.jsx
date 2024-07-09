import { useState } from "react";
import PropTypes from "prop-types";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Item, List } from "./style";
import {
    EDIT,
    DELETE,
    TOGGLE,
    TODO_SUCCESSFULLY_UPDATED,
    TODO_SUCCESSFULLY_REMOVED,
    TODO_SUCCESSFULLY_TOGGLED,
    TODO_SUCCESSFULLY_UNTOGGLED,
} from "../../../common/constants";

const TodoList = (props) => {
    const [text, setText] = useState("");
    const [todoId, setId] = useState("");
    const { list, onRemoveItem, onToggleItem, onUpdateItem } = props;

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const editItem = (todo) => {
        setId(todo.id);
        setText(todo.text);
    };

    const saveItem = () => {
        onUpdateItem(todoId, text);
        setTimeout(() => toastr.success(TODO_SUCCESSFULLY_UPDATED), 0);
        setId("");
        setText("");
    };

    const removeItem = (id) => {
        onRemoveItem(id);
        setTimeout(() => toastr.success(TODO_SUCCESSFULLY_REMOVED), 0);
    };

    const renderItem = (todo) => {
        if (todoId === todo.id) {
            return (
                <span>
                    <input type="text" value={text} onChange={onTextChange} />
                    <button onClick={saveItem}>{EDIT}</button>
                </span>
            );
        }

        return <span onDoubleClick={() => editItem(todo)}>{todo.text}</span>;
    };

    const toggle = (todo) => {
        onToggleItem(todo.id);
        if (!todo.done) {
            return setTimeout(
                () => toastr.success(TODO_SUCCESSFULLY_TOGGLED),
                0
            );
        }
        setTimeout(() => toastr.success(TODO_SUCCESSFULLY_UNTOGGLED), 0);
    };

    return (
        <List>
            {list.map((todo) => (
                <Item
                    key={todo.id}
                    style={{
                        textDecoration: todo.done ? "line-through" : "none",
                    }}
                >
                    {renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => toggle(todo)}>{TOGGLE}</button>
                    <button onClick={() => removeItem(todo.id)}>
                        {DELETE}
                    </button>
                </Item>
            ))}
        </List>
    );
};

TodoList.propTypes = {
    list:         PropTypes.array,
    onRemoveItem: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUpdateItem: PropTypes.func,
};

export default TodoList;
