import React, { useState } from "react";
import PropTypes from 'prop-types';

import './input.css';

const Input = (props) => {
    const [ value, setValue ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!value) return;

        onAddTodo(value);
        setValue('');
    };

    return (
        <input
            type        = { "text" }
            value       = { value }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};

export default Input;
