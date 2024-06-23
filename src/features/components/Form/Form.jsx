import { useState } from "react";
import PropTypes from 'prop-types';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { StyledInput } from "./style";

export default function Form(props) {
    const [ name, setName ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!name) return;

        onAddTodo(name);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        setName('');
    };

    return (
        <StyledInput
            type        = { "text" }
            value       = { name }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
}

Form.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};
