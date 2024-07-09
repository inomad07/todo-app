import { useState } from "react";
import PropTypes from "prop-types"
import toastr from "toastr"
import "toastr/build/toastr.min.css";
import { Input } from "./style";

const placeholder = 'Type a todo, then hit enter!'; 

export default function Form({ onAddTodo } ) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!text) {
            setTimeout(() => toastr.error("Cannot create todo!"), 0);
            return;
        }
        const todo = {
            text,
            toggle: false,
        };

        onAddTodo(todo);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        setText("");
    };

    return (
        <Input
            type={"text"}
            value={text}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
}

Form.propTypes = {
    onAddTodo: PropTypes.func,
};
