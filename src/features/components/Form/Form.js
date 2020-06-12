import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 100%;
    padding: 15px;
    border-width: 0;
`;

const Form = (props) => {
    const [ text, setText ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!text) return;

        const todo = {
            text,
            toggle: false
        };

        onAddTodo(todo);
        setText('');
    };

    return (
        <Input
            type        = { "text" }
            value       = { text }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

Form.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};

export default Form;