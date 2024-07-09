import { useState } from "react";
import PropTypes from 'prop-types';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { PLACEHOLDER, TODO_SUCCESSFULLY_CREATED, CANNOT_CREATE_TODO } from "../../../common/constants";
import { Input } from "./style";


const Form = ({ onAddTodo }) => {
    const [ text, setText ] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!text) {
            setTimeout(() => toastr.error(CANNOT_CREATE_TODO), 0);
            return;
        }

        onAddTodo(text);
        setTimeout(() => toastr.success(TODO_SUCCESSFULLY_CREATED), 0);
        setText('');
    };

    return (
        <Input
            type={"text"}
            value={text}
            placeholder={PLACEHOLDER}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
    );
};

Form.propTypes = {
    onAddTodo: PropTypes.func
};

export default Form
