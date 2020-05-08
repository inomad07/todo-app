import React, { useState } from "react";
import PropTypes from 'prop-types';

import './input.css';

const Input = (props) => {
    const [ name, setName ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!name) return;

        onAddTodo(name);
        setName('');
    };

    return (
        <input
            type        = { "text" }
            value       = { name }
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
